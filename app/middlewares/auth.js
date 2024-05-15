const jwt = require("jsonwebtoken");
const { Module, RolModule } = require("../models/index");

// * middleware para verificar el token introducido
const validarToken = (req, res, next) => {
  
  if (!req.headers.authorization) {
    return res.status(401).json({
      mesagge: "No tiene autorizacion envie un token",
    });
  }

  try {
    const token = req.headers.authorization.split(" ");
    const userToken = jwt.verify(token[1], process.env.SECRET_KEY);
    if (userToken) {
      // * Guardamos el rol en la request
      req.rol = userToken.rol;
      next();
    }
  } catch (e) {
    res.status(400).json({ message: "Token no valido" });
    console.log(e);
  }
};

// * middleware para verificar los permisos del usuario
const validarPermisos = async (req, res, next) => {
  // * verficamos si se paso antes por el middleware de verificacion del token y recuperamos el rol
  if (!req.rol) return res.status(500).json({ message: "Token no validado" });
  const idRol = req.rol;

  // * verificamos si la url existe en nuestra base de datos
  const urlModule = await Module.findOne({ where: { url: req.baseUrl } });
  if (urlModule === null)
    return res.status(404).json({
      message: "Esta Module y ruta no existe en la base de datos",
    });
  
    const idModule = urlModule.id;

  // *  Verificamos si el rol tiene los permisos de acceder a dicho Module
  const usuarioPermitido = await RolModule.findOne({
    where: {
      idModule,
      idRol,
    },
  });
  if (usuarioPermitido) {
    switch (req.method) {
      case "GET":
        if (usuarioPermitido.okSelect) next();
        else
          return res.status(401).json({
            message: "No tiene permisos para realizar esta accion SELECT",
          });
        break;
      case "POST":
        if (usuarioPermitido.okInsert) next();
        else
          return res.status(401).json({
            message: "No tiene permisos para realizar esta accion CREATE",
          });
        break;
      case "PUT":
        if (usuarioPermitido.okUpdate) next();
        else
          return res.status(401).json({
            message: "No tiene permisos para realizar esta accion UPDATE",
          });
        break;
      case "DELETE":
        if (usuarioPermitido.okDelete) next();
        else
          return res.status(401).json({
            message: "No tiene permisos para realizar esta accion DELETE",
          });
        break;
      case "PATCH":
        if (usuarioPermitido.okUpdate) next();
        else
          return res.status(401).json({
            message: "No tiene permisos para realizar esta accion UPDATE",
          });
        break;
    }
  } else {
    return res.status(404).json({
      message: "El usuario no tiene permisos",
    });
  }
};
module.exports = {
  validarToken,
  validarPermisos,
};

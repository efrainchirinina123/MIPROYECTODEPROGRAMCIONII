const NotFoundResponse = async (message = 'Dato no encontrado', errors = []) => {
	return {
		status: false,
		statusCode: 404,
		message: message,
		error: errors,
	};
};
const BadRequest = (message = 'Dato no encontrado', errors = []) => {
	return {
		statusCode: 400,
		status: false,
		message: message,
		error: errors,
	};
};
const InternalServer = (message = 'Error en el servidor', errors = []) => {
	return {
		statusCode: 500,
		status: false,
		message: message,
		error: errors,
	};
};

const Successful = (message = 'Operacion Exitosa', data = []) => {
	return {
		data,
		statusCode: 200,
		status: false,
		message: message,
		
	};
};

module.exports = {
	NotFoundResponse,
	BadRequest,
	InternalServer,
	Successful,
};

'use strict';

const express = require('express');
const app = express();
const {sequelize} = require('./app/models/index');
const cors = require('cors');

require('dotenv').config();
// require('dotenv').config({ path: '/custom/path/to/.env' })
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(
// 	cors({
// 		origin: ['http://localhost:5001', process.env.HOST_FRONT],
// 		credentials: true,
// 	})
// );
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', __dirname + '/views');

// conexion a la base de datos
sequelize
	.authenticate()
	.then(() => {
		console.log('DB Connection exitosa yupi  :)  ..');
	})
	.catch((error) => {
		console.log('Failed to Connection DB Local\n', error);
	});
//  fin db

// TODO: Route for api
app.use('/api/v1', require('./app/routes/api/index'));

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port http://localhost:${process.env.PORT} con ${process.env.MYSQL_USER} Y ${process.env.MYSQL_PASSWORD}`);
});

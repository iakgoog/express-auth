const mysql = require('mysql');
const util = require('util');
const config = require('../config/config');

const Connection = mysql.createConnection({
	host: config.DB_HOST,
	port: config.DB_PORT,
	user: config.DB_USER,
	password: config.DB_PASSWORD,
	database: config.DB_NAME,
	multipleStatements: true
});

Connection.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to the database.");
});

Connection.query = util.promisify(Connection.query);

module.exports = Connection;

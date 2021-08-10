//File: controllers/empleados.js
//var mongoose = require('mongoose');

var Empleado  = JSON.stringify('Empleado');
const redisClient = require("redis");
const redisConnection = require("../redis-conection");
const redis = new redisConnection();

//GET - Return a Empleado with specified ID
exports.findById = async function(req, res) {
	var id = req.body.id
	try {
			let data = await redis.get(id);
			res.status(200).jsonp(data);
		} catch (error) {
			res.status(400).json({
				error: true,
				message: "Error procesando datos"
			  })
		}	
};

//POST - Insert a new Empleado in the DB
exports.addEmpleado =  function(req, res) {

	if(!req.body.id){
		return res.status(400).json({
		  error:true,
		  message: "El id de empleado es necesario"
		})}

	if(!req.body.idJefe){
			return res.status(400).json({
			  error:true,
			  message: "El id de jefe es necesario"
			})}

	var data = req.body
	var id= req.body.id
	var idJefe = req.body.idJefe

	var client = redisClient.createClient();
	if (client.exists(idJefe, async function(err, reply) {
		
		if (reply == 1) {
			try {
				let rr = await redis.set(id , JSON.stringify(data));
				res.status(201).jsonp(data);
				
			} catch (error) {

				res.status(400).json({
					error: true,
					message: "Error procesando datos"
				  })
			}
		} else {
			res.status(400).json({
				error:true,
				message: "Clave de jefe invalida"
			  })
		}
	}));
	

	
};


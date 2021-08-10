'use strict'

var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var EmpleadoCtrl = require('./controllers/empleados');

var router = express.Router();
router.get('/', function(req, res) {
  res.send("Bienvenido al API de empleados 2021!");
  console.log(req.body)
});

app.use(router);

var empleados = express.Router();
empleados.route('/empleado/')
  .get(EmpleadoCtrl.findById)
  .post(EmpleadoCtrl.addEmpleado);
app.use('/api', empleados);

app.listen(3000, function() {
  console.log("Node server running on http://127.0.0.1:3000");
});
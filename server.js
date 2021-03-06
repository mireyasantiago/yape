const express         = require('express'); //Framework Express
const bodyParser      = require('body-parser'); //Parsea el post para obtener objetos json en el request
const levelup         = require('levelup'); // Base de datos
const morgan          = require('morgan'); // Sistema de logging (muestra en la cosa los request)
const morganjson      = require('morgan-json');
const apiUsers        = require('./api/users'); //Endpoints relacionados al User model

const path = require('path');//para agregar direcciones

const app = express();
const db  = levelup('./api/users', {valueEncoding: 'json'});

const format = morganjson({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});
//parte de la configuracion
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//dependencia para devolver un json
app.use(express.static('public'));//
app.use(morgan(format));
app.use('/static',express.static(path.join(__dirname,'node_modules')));//para accerder a materalize y jquery

let router = express.Router();

router.get('/', (req, res) => {
  res.json({ name: 'yape-api',version: "0.0.1"});
  //res.sendFile(__dirname+'/public/index.html');
  res.sendFile(__dirname+'/index.html'); // cambio public para llamar a mi index

});

//parte de la api
app.use('/api',apiUsers(router,db));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running on port '+port+'!');
});



// crear las rutas de trrabajos

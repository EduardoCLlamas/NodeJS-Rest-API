<<<<<<< HEAD
const express = require('express');
const server = express();
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');

// Configuraciones
server.set('port', process.env.PORT || 3000);

// Middlewares
server.use(morgan('dev'));
server.use(express.json());

// Rutas
server.use('/api/restUse',require('./routes/rest.routes'));

// Archivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

//Ejecutar Servidor
server.listen(server.get('port'), () => {
    console.log(`Servidor en el puerto  ${server.get('port')}`);
});

=======
const express = require('express');
const server = express();
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');

// Configuraciones
server.set('port', process.env.PORT || 3000);

// Middlewares
server.use(morgan('dev'));
server.use(express.json());

// Rutas
server.use('/api/restUse',require('./routes/rest.routes'));

// Archivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

//Ejecutar Servidor
server.listen(server.get('port'), () => {
    console.log(`Servidor en el puerto  ${server.get('port')}`);
});

>>>>>>> 978705c0766f767046ce7c0d36c80e5666f1f456

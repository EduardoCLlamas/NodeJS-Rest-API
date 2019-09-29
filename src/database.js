const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-app';
mongoose.connect(URI)
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log('Error en: '+err));

module.exports = mongoose;
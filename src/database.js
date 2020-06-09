<<<<<<< HEAD
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-app';
mongoose.connect(URI)
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log('Error en: '+err));

=======
const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-app';
mongoose.connect(URI)
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log('Error en: '+err));

>>>>>>> 978705c0766f767046ce7c0d36c80e5666f1f456
module.exports = mongoose;
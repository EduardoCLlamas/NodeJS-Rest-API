<<<<<<< HEAD
const mongoose = require('mongoose');
const {Schema} = mongoose;

const modelSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
});

=======
const mongoose = require('mongoose');
const {Schema} = mongoose;

const modelSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
});

>>>>>>> 978705c0766f767046ce7c0d36c80e5666f1f456
module.exports = mongoose.model('Model', modelSchema);
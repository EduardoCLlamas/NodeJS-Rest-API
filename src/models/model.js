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

module.exports = mongoose.model('Model', modelSchema);
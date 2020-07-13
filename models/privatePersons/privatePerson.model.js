const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const privatePersonSchema = new Schema({
  
identification: {
        type: String,
        required: true
    },
        name: {
        type: String,
        required: true
    },
        name_thai: {
        type: String,
        required: true
        },
        surname_thai: {
        type: String,
        required: true
    },
        gender: {
            type: String,
        },
        birthDate: {
            type: String,
        },
        call: {
            type: String,
            required: true
            }, 
});

// methods ======================
// generating a hash



module.exports = mongoose.model('privatePersons', privatePersonSchema);

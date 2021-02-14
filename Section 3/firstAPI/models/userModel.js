const mongoose = require('../connection');

const schema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    admin : Boolean
})

const model = mongoose.model('Users', schema);

module.exports = model;
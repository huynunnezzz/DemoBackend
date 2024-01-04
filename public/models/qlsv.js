const mongoose = require('mongoose');
const qlsv = new mongoose.Schema({
        msv : String,
        name : String,
        sex : String,
        address : String,
        classroom : String,
    },{collection:'qlsv'});
module.exports = mongoose.model('QLSV', qlsv);
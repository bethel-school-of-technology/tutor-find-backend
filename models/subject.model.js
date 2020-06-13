const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    username: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    
}, {
    timestamps: true,
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
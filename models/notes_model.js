const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdTime: { type: Date, default: Date.now() },
    updatedTime: { type: Date },
});



module.exports = mongoose.model("Notes", notesSchema);
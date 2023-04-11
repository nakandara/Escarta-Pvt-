const { Schema, model, default: mongoose } = require("mongoose");

const BookSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Book", BookSchema, "book") 
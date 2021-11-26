const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    counts: [Number],
})

module.exports = mongoose.model("Record", recordSchema, "records");
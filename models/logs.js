const mongoose = require('mongoose');

const logSchema = new mongoose.Schema(
    {
    title: { type: String, require: true },
    entry: { type: String, require: true },
    shipIsBroken: { type: Boolean, defult: true }
    },
    { timestamps: true }
)

const Log = mongoose.model('logs', logSchema)

module.exports = Log
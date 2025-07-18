const mongoose = require('mongoose');

const userMoneySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    money: {
        type: Number,
        required: true,
        default: 1000000, // 1 million USD default
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UserMoney', userMoneySchema); 
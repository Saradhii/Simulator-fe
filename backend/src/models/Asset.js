const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assetType: {
        type: String,
        required: true,
        enum: ['crypto', 'property', 'art', 'stocks']
    },
    assetName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    averagePrice: {
        type: Number,
        required: true,
        min: 0
    },
    currentPrice: {
        type: Number,
        required: true,
        min: 0
    },
    totalValue: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

// Compound index to ensure unique asset per user
assetSchema.index({ userId: 1, assetType: 1, assetName: 1 }, { unique: true });

module.exports = mongoose.model('Asset', assetSchema); 
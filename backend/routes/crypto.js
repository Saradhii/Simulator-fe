const express = require('express');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const UserMoney = require('../models/UserMoney');
const Asset = require('../models/Asset');
const Transaction = require('../models/Transaction');

const router = express.Router();

// Buy crypto route
router.post('/buy', auth, [
    body('cryptoName').notEmpty().withMessage('Crypto name is required'),
    body('quantity').isFloat({ min: 0.000001 }).withMessage('Quantity must be a positive number'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number')
], async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { cryptoName, quantity, price } = req.body;
        const userId = req.user._id;
        const totalAmount = quantity * price;

        // Check if user has enough money
        const userMoney = await UserMoney.findOne({ userId });
        if (!userMoney || userMoney.money < totalAmount) {
            return res.status(400).json({
                message: 'Insufficient funds',
                available: userMoney ? userMoney.money : 0,
                required: totalAmount
            });
        }

        // Start transaction
        const session = await UserMoney.startSession();
        session.startTransaction();

        try {
            // Deduct money from user account
            await UserMoney.findOneAndUpdate(
                { userId },
                { $inc: { money: -totalAmount } },
                { session }
            );

            // Find or create asset
            let asset = await Asset.findOne({
                userId,
                assetType: 'crypto',
                assetName: cryptoName
            });

            if (asset) {
                // Update existing asset
                const newTotalQuantity = asset.quantity + quantity;
                const newAveragePrice = ((asset.averagePrice * asset.quantity) + (price * quantity)) / newTotalQuantity;
                const newTotalValue = newTotalQuantity * price;

                await Asset.findOneAndUpdate(
                    { _id: asset._id },
                    {
                        quantity: newTotalQuantity,
                        averagePrice: newAveragePrice,
                        currentPrice: price,
                        totalValue: newTotalValue
                    },
                    { session }
                );
            } else {
                // Create new asset
                asset = new Asset({
                    userId,
                    assetType: 'crypto',
                    assetName: cryptoName,
                    quantity,
                    averagePrice: price,
                    currentPrice: price,
                    totalValue: totalAmount
                });
                await asset.save({ session });
            }

            // Create transaction record
            const transaction = new Transaction({
                userId,
                type: 'buy',
                assetType: 'crypto',
                assetName: cryptoName,
                quantity,
                price,
                totalAmount,
                description: `Bought ${quantity} ${cryptoName} at $${price} each`
            });
            await transaction.save({ session });

            await session.commitTransaction();
            session.endSession();

            res.json({
                message: 'Crypto purchased successfully',
                transaction: {
                    cryptoName,
                    quantity,
                    price,
                    totalAmount
                },
                remainingBalance: userMoney.money - totalAmount
            });

        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw error;
        }

    } catch (error) {
        console.error('Buy crypto error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user's crypto assets
router.get('/assets', auth, async (req, res) => {
    try {
        const assets = await Asset.find({
            userId: req.user._id,
            assetType: 'crypto'
        });

        res.json({
            assets: assets.map(asset => ({
                id: asset._id,
                name: asset.assetName,
                quantity: asset.quantity,
                averagePrice: asset.averagePrice,
                currentPrice: asset.currentPrice,
                totalValue: asset.totalValue
            }))
        });

    } catch (error) {
        console.error('Get assets error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user's transactions
router.get('/transactions', auth, async (req, res) => {
    try {
        const transactions = await Transaction.find({
            userId: req.user._id,
            assetType: 'crypto'
        }).sort({ createdAt: -1 }).limit(50);

        res.json({
            transactions: transactions.map(transaction => ({
                id: transaction._id,
                type: transaction.type,
                assetName: transaction.assetName,
                quantity: transaction.quantity,
                price: transaction.price,
                totalAmount: transaction.totalAmount,
                description: transaction.description,
                createdAt: transaction.createdAt
            }))
        });

    } catch (error) {
        console.error('Get transactions error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 
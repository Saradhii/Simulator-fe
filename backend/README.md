# Simulator Backend

A Node.js Express backend with MongoDB and Mongoose for the Simulator Frontend application.

## Features

- User authentication (signup/login) with JWT
- Crypto trading functionality
- User money management
- Transaction tracking
- Asset portfolio management

## Database Schema

### Users
- `username` (String, required, unique)
- `email` (String, required, unique)
- `password` (String, required, hashed)

### UserMoney
- `userId` (ObjectId, ref: User, required, unique)
- `money` (Number, required, default: 1000000)

### Transactions
- `userId` (ObjectId, ref: User, required)
- `type` (String, enum: ['buy', 'sell', 'deposit', 'withdrawal'])
- `assetType` (String, enum: ['crypto', 'property', 'art', 'stocks'])
- `assetName` (String, required)
- `quantity` (Number, required)
- `price` (Number, required)
- `totalAmount` (Number, required)
- `description` (String)

### Assets
- `userId` (ObjectId, ref: User, required)
- `assetType` (String, enum: ['crypto', 'property', 'art', 'stocks'])
- `assetName` (String, required)
- `quantity` (Number, required)
- `averagePrice` (Number, required)
- `currentPrice` (Number, required)
- `totalValue` (Number, required)

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `config.env` and update the values:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure secret key for JWT tokens
     - `PORT`: Server port (default: 5000)

3. **Start MongoDB:**
   Make sure MongoDB is running on your system.

4. **Run the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

#### POST `/api/auth/signup`
Create a new user account.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### POST `/api/auth/login`
Login with existing credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### GET `/api/auth/profile`
Get user profile (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  },
  "money": 1000000
}
```

### Crypto Trading

#### POST `/api/crypto/buy`
Buy crypto assets (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "cryptoName": "Bitcoin",
  "quantity": 0.5,
  "price": 50000
}
```

**Response:**
```json
{
  "message": "Crypto purchased successfully",
  "transaction": {
    "cryptoName": "Bitcoin",
    "quantity": 0.5,
    "price": 50000,
    "totalAmount": 25000
  },
  "remainingBalance": 975000
}
```

#### GET `/api/crypto/assets`
Get user's crypto assets (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "assets": [
    {
      "id": "asset_id",
      "name": "Bitcoin",
      "quantity": 0.5,
      "averagePrice": 50000,
      "currentPrice": 52000,
      "totalValue": 26000
    }
  ]
}
```

#### GET `/api/crypto/transactions`
Get user's crypto transactions (requires authentication).

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "transactions": [
    {
      "id": "transaction_id",
      "type": "buy",
      "assetName": "Bitcoin",
      "quantity": 0.5,
      "price": 50000,
      "totalAmount": 25000,
      "description": "Bought 0.5 Bitcoin at $50000 each",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400`: Bad Request (validation errors, insufficient funds)
- `401`: Unauthorized (invalid token, missing authentication)
- `500`: Internal Server Error

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation with express-validator
- MongoDB transactions for data consistency
- CORS enabled for frontend integration 
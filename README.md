# E-commerce API

A simple Node.js API for managing products in an e-commerce system.

## Features

- Get all products
- Add new products
- CORS enabled
- Request logging
- System information display on startup

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

The server will start on port 4000 and display system information.

## API Endpoints

### GET /products
Returns all products in JSON format.

### POST /products
Adds a new product. Send a JSON body with:
- name (required)
- price (required)
- description (optional)

Example request body:
```json
{
    "name": "New Product",
    "price": 19.99,
    "description": "Product description"
}
```
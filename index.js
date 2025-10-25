const express = require('express');
const cors = require('cors');
const http = require('http');
const os = require('os');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configuration
// Configure CORS to explicitly allow the frontend origin and localhost for development.
const allowedOrigins = [
  'https://ecomerce-rho-brown.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: This origin is not allowed'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use('/products', productsRouter);


const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
  
    console.log('\nSystem Information:');
    console.log('Platform:', os.platform());
    console.log('CPU Cores:', os.cpus().length);
    console.log('Total Memory:', Math.round(os.totalmem() / (1024 * 1024 * 1024)), 'GB');
    console.log('Free Memory:', Math.round(os.freemem() / (1024 * 1024 * 1024)), 'GB');
    console.log('OS Type:', os.type());
    console.log('OS Release:', os.release());
});
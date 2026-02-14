const mongoose= require('mongoose');
require("dotenv").config();

const mongourl = process.env.DB_CONNECTION;

// Establish connection and log errors without crashing the app.
// Mongoose v9 no longer needs useNewUrlParser/useUnifiedTopology options.
mongoose.connect(mongourl).catch((err) => {
    console.error('MongoDB connection failed:', err.message);
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('MongoDB connected');
});
db.on('error', (err) => {
    console.error('MongoDB connection error', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;

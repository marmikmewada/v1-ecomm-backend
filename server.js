const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbConfig = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
mongoose.connect(dbConfig.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
  // Start the server after successful database connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('Database connection error:', err);
});

// Define routes and middleware below
// Example:
// app.use('/api', require('./routes/api'));


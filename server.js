const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

// Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// Init App
const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB (using mLab)
mongoose.connect(db)
  .then((() => console.log('MongoDB connected...')))
  .catch(err => console.log(err));

// Test Route
app.get('/', (req, res) => res.send('Hello World...'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Start Server
app.listen(port, () => console.log(`Servers running on port ${port}`));

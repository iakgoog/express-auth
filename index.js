const express = require('express');
const app = express();

// Import Routes
const authRoute = require('./routes/auth');

// Router Middleware
app.use('/api/users', authRoute);

app.listen(3005, () => console.log('Server is running'));

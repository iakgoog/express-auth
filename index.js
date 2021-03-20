const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import Routes
const authRoute = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Router Middleware
app.use('/api/users', authRoute);

app.listen(3005, () => console.log('Server is running'));

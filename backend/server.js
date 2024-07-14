require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const app = express();
// const userRouter = require('src/User-router');
const userRouter = require('./src/User-router');

app.use(cors()); //enable cors for all routes
app.use(express.json());
app.use('/api', userRouter); // Prefix routes with /api

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongodb connected");
        app.listen(PORT, () => {
            console.log(`server is running at port ${PORT}`);
        });
    })
    .catch(err => {
        console.log("Error connecting to MongoDB:", err.message);
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

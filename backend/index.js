const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const authRouter = require(`${__dirname}/routes/authRoutes`);
const merchantRoutes = require(`${__dirname}/routes/merchantRoutes`);
const giftCardRoutes = require(`${__dirname}/routes/giftCardRoutes`);

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
const date = new Date()
console.log(date);
//Authentication routes
app.use('/api/auth', authRouter);
app.use('/api/merchants', merchantRoutes)
app.use('/api/coupons', giftCardRoutes)


app.listen(port, ()=> {
    console.log(`server listening at http://localhost:${port}`);
});
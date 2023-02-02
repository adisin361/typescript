
// express app
import express from 'express';
// const userRouter = require('./src/routes/userRoutes');
import userRouter from './src/routes/userRoutes.js';
const app = express();
const port = 8080;
app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
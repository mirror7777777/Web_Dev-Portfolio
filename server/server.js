import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import Register from './auth/authenticator.js';
import dotenv from 'dotenv';
const app = express();
import MongoDb from './config/connect.js';
dotenv.config();
const Port = process.env.PORT_Number;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(express.static("docs/public"))

// app.use('/api/form', route)
app.get('/api/form', (req, res)=>{
    res.send('Works')

});

app.post('/api/form' , Register);

app.listen(Port , ()=>{
    MongoDb()
    console.log(`server is running on port http://localhost:${Port}`)

})

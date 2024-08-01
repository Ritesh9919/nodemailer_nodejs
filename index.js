import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { sendMail } from './sendMail.js';
const port = 8000;


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res)=> {
    sendMail();
    res.send("Hello NodeMailer");
})



app.listen(port, ()=> {
    console.log(`Server is running on port:${port}`);
})


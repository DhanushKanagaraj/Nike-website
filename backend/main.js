import express from 'express';
import dbConnect from './database/db.js';
import { users } from './controller/controll.js';

const app = express();
const PORT = 5050;
app.get('/data',users);
dbConnect();

app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in server Creating');
    }
    console.log('server created successfully');
})
import express from "express";
import {PORT, mongourl} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modules/bookmodel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
// app.use(cors(
//     {
//         origin: "http://localhost:3000",
//         method: ['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     }
    
// ))
// get request and response
app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to My Web Page');
});

app.use('/books',booksRoute); 
// Database connection
mongoose.connect(mongourl)
.then(()=>{
    console.log('App connected with Database');
    
    app.listen(PORT,()=> {
        console.log(`App is listening ${PORT}`);
     });
})
.catch((error)=>{
    console.log(error);
    
});
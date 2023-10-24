import express, { request, response } from "express";
import {PORT, mongourl} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modules/bookmodel.js";
import booksRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json());


// get request and response
app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to mern stack');
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
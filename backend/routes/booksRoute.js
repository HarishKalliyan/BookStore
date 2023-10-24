import express from 'express';
import { Book } from '../modules/bookmodel';
const router = express.Router();
// route to save book

router.post('/books',async(request,response)=>{
    try{
        if(!request.body.title||
            !request.body.aurthor||
            !request.body.publishyear
            ){
                 return response.status(400).send({
                    message: 'Send all required fields: title aurthor publishyear', 
                 });
            }
            const newBook={
                title: request.body.title,
                aurthor:request.body.aurthor,
                publishyear:request.body.publishyear,
            };

            const book = await Book.create(newBook); 
            return response.status(201).send(book);
    }
    catch(error){
        console.log(error.message); 
        response.status(500).send({message: error.message});
    }
});

// Route to many books

router.get('/books',async(request,response)=>{
    try{
        const books = await Book.find({});
        return response.status(200).json(
            {
                count: books.length,
                data: books
            }
           
        )
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message}); 
    }
})


// Route to get books one by one


router.get('/books/:id',async(request,response)=>{
    try{
        const {id}= request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book)
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message}); 
    }
})


// Route to Update a Book data
router.put('/books/:id',async(request,response)=>{
    try{
        if(!request.body.title||
            !request.body.aurthor||
            !request.body.publishyear
            ){
                 return response.status(400).send({
                    message: 'Send all required fields: title aurthor publishyear', 
                 });
            }
            
            const {id} = request.params;

            const result = await Book.findByIdAndUpdate(id,request.body);

            if(!result)
            {
                return response.status(404).json({message : 'Book not found'});
            }

            return response.status(200).send({message: 'Book update succeessfully'});
    }
    catch(error){
        console.log(error.message); 
        response.status(500).send({message: error.message});
    }
})
// Route for Delete Book
router.delete('/books/:id',async(request,response)=>{
    try{
        const {id} = request.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Book not found'});
        }

        return response.status(200).send({message : 'Book deleted successfully'});
    }
    catch(error){
        console.log(error.message); 
        response.status(500).send({message: error.message});
    }
})

export default router;
const express=require('express');
const dotenv=require('dotenv');
const DbConnection=require('./databaseConnection')
const userRouter=require('./routes/user');
const bookRouter=require('./routes/book');
const app=express();

dotenv.config();
DbConnection();


const PORT=8081;

app.use(express.json());

app.use('/users',userRouter);
app.use('/books',bookRouter);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"server is running successfully"
    });
})



app.get('*',(req,res)=>{
    res.status(404).json({
        message:"routes does not exist"
    })
})
app.listen(PORT,()=>{
    console.log(`server started at port : ${PORT}`);
})
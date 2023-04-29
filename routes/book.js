const express=require('express');
const {books}=require('../data/books.json');
const router=express.Router();
const {users}=require('../data/users.json');
const {UserModel,BookModel}=require('../models/index');
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById } = require('../controllers/book-controller');


/*
Route:/books
Method:GET
Description:get all the books
Access:Public
Parameters"none
 */
// router.get('/',(req,res)=>{
//     res.status(200).json({
//         success:true,
//         data:books
//         // data:books.map((value,index)=>{
//         //     return value.name;
//         // })
//     })
// });
router.get('/',getAllBooks);


/*
Route:/books
Method:POST
Description:Add a new book
Access:Public
Parameters:none
 */
// router.post('/',(req,res)=>{
//     const {data}=req.body;
//     if(!data){
//         return res.status(404).json({
//             success:false,
//             message:"data was not given "
//         })
//     }
//     const book=books.find((each)=>each.id === data.id);
//     if(book){
//         return res.status(404).json({
//             success:false,
//             message:"book Already Exist with same id "
//         })
//     }
//     const allBooks=[...books,data]
//     return res.status(201).json({
//         success:true,
//         data:allBooks
//     })
// });

router.post('/',addNewBook);


/*
Route:/books/:id
Method:GET
Description:get the single book by their id
Access:Public
Parameters:id
 */
// router.get('/:id',(req,res)=>{
//     const {id}=req.params;
//     const book=books.find((each)=>each.id === id);

//     if(!book){
//         return res.status(404).json({
//             success:false,
//             message:"book Not Found"
//         })
//     }
//     return res.status(200).json({
//         success:true,
//         data:book

//     })
// });
router.get('/:id',getSingleBookById)






/*
Route:/book/:id
Method:PUT
Description:To update the book by their id
Access:Public
Parameters:id
 */
// router.put('/:id',(req,res)=>{
//     const {id}=req.params;
//     const {data}=req.body;
//     if(!data){
//         return res.status(404).json({
//             success:false,
//             message:"data was not given "
//         })
//     }
//     const book=books.find((each)=>each.id === id);

//     if(!book){
//         return res.status(404).json({
//             success:false,
//             message:"book Not Found with particular id "
//         })
//     }

//     const updatedBook=books.map((each)=>{
//         if(each.id === id){
//             return {
//                 ...each,
//                 ...data
//             }
//         }
//         return each;
//     })


//     return res.status(200).json({
//         success:true,
//         data:updatedBook
//     })
// });
router.put('/:id',updateBookById)




/*
Route:/book/issued/by-user
Method:GET
Description:get all the issued book
Access:Public
Parameters:none
 */
// router.get('/issued/by-user',(req,res)=>{
//     const usersWithIssuedBook=users.filter((each)=>{
//         if(each.issuedBook){
//             return each;
//         }
//     })

//     const issuedBooks=[];
//     usersWithIssuedBook.forEach((each)=>{
//         const book=books.find((book)=>book.id === each.issuedBook);

//         book.issuedBy=each.name;
//         book.issuedDate=each.issuedDate;
//         book.returnDate=each.returnDate;

//         issuedBooks.push(book);
//     })

//     if(issuedBooks.length === 0){
//         return res.status(400).json({
//             success:false,
//             message:"No books has been issued"
//         })
//     }
//     return res.status(200).json({
//         success:true,
//         data:issuedBooks
//     })
// });
router.get('/issued/by-user',getAllIssuedBooks);




module.exports=router;
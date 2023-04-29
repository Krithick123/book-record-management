const express=require('express');
const {users}=require('../data/users.json');
const router=express.Router();
const {UserModel,BookModel}=require('../models/index');
const { getAllUsers, getSingleUserById, createNewUser, updateUserById, deleteUser, getSubscriptionDetailsById } = require('../controllers/user-controller');


/*
Route:/users
Method:GET
Description:get all the users
Access:Public
Parameters"none
 */
// router.get('/',(req,res)=>{
//     res.status(200).json({
//         success:true,
//         data:users
//         // data:users.map((value,index)=>{
//         //     return value.name;
//         // })
//     })
// });
router.get('/',getAllUsers);

/*
Route:/users/:id
Method:GET
Description:get the single user by their id
Access:Public
Parameters:id
 */
// router.get('/:id',(req,res)=>{
//     const {id}=req.params;
//     const user=users.find((each)=>each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User Not Found"
//         })
//     }
//     return res.status(200).json({
//         success:true,
//         data:user

//     })
// });
router.get('/:id',getSingleUserById);


/*
Route:/users
Method:POST
Description:create a new user
Access:Public
Parameters:none
 */
// router.post('/',(req,res)=>{
//     const {id,name,surname,email,subscriptionType,subscriptionDate}=req.body;
//     const user=users.find((each)=>each.id === id);
//     if(user){
//         return res.status(404).json({
//             success:false,
//             message:"User Already Exist"
//         })
//     }
//     users.push({
//         id,
//         name,
//         surname,
//         email,
//         subscriptionType,
//         subscriptionDate
//     })
//     return res.status(201).json({
//         success:true,
//         data:users
//     })
// });
router.post('/',createNewUser);




/*
Route:/users/:id
Method:PUT
Description:To update the  user by their id
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
//     const user=users.find((each)=>each.id === id);

//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User Not Found"
//         })
//     }

//     const updatedUser=users.map((each)=>{
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
//         data:updatedUser
//     })
// });

router.put('/:id',updateUserById);




/*
Route:/users/:id
Method:PUT
Description:To delete the  user by their id
Access:Public
Parameters:id
 */
// router.delete('/:id',(req,res)=>{
//     const {id}=req.params;
//     const user=users.find((each)=>each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User to be Deleted Not Found"
//         })
//     }
//     const index=users.indexOf(user);
//     users.splice(index,1);
//     return res.status(200).json({
//         success:true,
//         data:users
//     })
// });
router.delete('/:id',deleteUser);


/*
Route:/users/subscription-details/{id}
Method:GET
Description:get subscription-details
Access:Public
Parameters:none
 */
// router.get('/subscription-details/:id',(req,res)=>{
//     const { id } = req.params;

//   const user = users.find((each) => each.id === id);

//   if (!user)
//     return res.status(404).json({ success: false, message: "User not found" });

//   const getDateInDays = (data = "") => {
//     let date;
//     if (data === "") {
//       // current data
//       date = new Date();
//     } else {
//       // getting date on basics of variable
//       date = new Date(data);
//     }
//     let days = Math.floor(date / (1000 * 60 * 60 * 24));
//     return days;
//   };

//   const subscriptionType = (date) => {
//     if (user.subscriptionType === "Basic") {
//       date = date + 90;
//     } else if (user.subscriptionType === "Standard") {
//       date = date + 180;
//     } else if (user.subscriptionType === "Premium") {
//       date = date + 365;
//     }
//     return date;
//   };
//   // subscription calc here
//   // Jan 1, 1970
//   let returnDate = getDateInDays(user.returnDate);
//   let currentDate = getDateInDays();
//   let subscriptionDate = getDateInDays(user.subscriptionDate);
//   let subscriptionExpiration = subscriptionType(subscriptionDate);

//   const data = {
//     ...user,
//     subscriptionExpired: subscriptionExpiration < currentDate,
//     daysLeftForExpiration:
//       subscriptionExpiration <= currentDate
//         ? 0
//         : subscriptionExpiration - currentDate,
//     fine:
//       returnDate < currentDate
//         ? subscriptionExpiration <= currentDate
//           ? 200
//           : 100
//         : 0,
//   };
//   return res.status(200).json({ success: true, data });
// });
router.get('/subscription-details/:id',getSubscriptionDetailsById);

module.exports=router;
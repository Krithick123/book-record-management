const mongoose=require('mongoose');

function dbConnection(){
    const DB_URL=process.env.MONGO_URI;

    mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

    const db=mongoose.connection;
    db.on("error",console.error.bind("CONNECTION ERROR"));
    db.once("open",function(){
        console.log("DB CONNECTED");
    })
}

module.exports=dbConnection;
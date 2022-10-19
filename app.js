const express=require('express');
const cookieParser=require('cookie-parser')
const app=express();
const cors=require('cors')
require('dotenv').config();
const user=require('./src/router/user')
const connectToDatabase=require('./src/database/connect')
const port=process.env.PORT||5000;
app.use(express.json());
app.use(cors({
    origin:["https://resmxt.web.app","http://localhost:3000"],
    credentials:true
}));
app.use(cookieParser())
app.use('/api/v1/user',user);
app.get('/',(req,res)=>{
    res.send("Resume builder app");
})
const startServer= async()=>{
    try{
        await connectToDatabase(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log("server is listening :)");
        })
        console.log("connected to database :)");
    }catch(err){
        console.log(err);
    }
}
startServer();

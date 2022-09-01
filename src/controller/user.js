const jwt= require('jsonwebtoken')
const User=require('../models/user');


const getUser=async(req,res)=>{
    try {
        const {_id}=req.user;
        const user=await User.findOne({_id:_id});
        if(!user){
            res.status(400).json({msg:"user not authanticated"})
            return;
        }
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
}
const registerUser=async(req,res)=>{
    try{
        console.log(req.body);
        const user=await User.create(req.body);
        if(!user){
            res.status(500).json({msg:err})
            return;
        }
        const { _id , username}=user;
        const token=jwt.sign({_id,username},process.env.JWT_SECRET,{
            expiresIn:'7d'
        })
        user.token=token;
        user.save();
        res.status(201).json({user})
    }catch(err){
        console.log(err);
    }
}
const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        console.log(req.body);
        const user=await User.findOne({email:email});
        if(!user) {
            res.status(400).json({msg:"invalid credential"});
            return;
        }
        if(user.password!==password){
            res.status(400).json({msg:"invalid credential"});
            return;
        }
        const { _id , username}=user;
        const token=jwt.sign({_id,username},process.env.JWT_SECRET,{
            expiresIn:'7d'
        })
        user.token=token;
        user.save();
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
}
const addBasicInfo=async (req,res)=>{
    try {
        const { _id }=req.user && req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{basic_info:req.body},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
const addEducation=async (req,res)=>{
    try {
        const { _id }=req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{education:req.body},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
const addWork=async(req,res)=>{
    try {
        const { _id }=req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{work_experience:req.body},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const addSkills=async (req,res)=>{
    try {
        const { _id }=req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{skills:req.body},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const addProjects=async(req,res)=>{
    try {
        const { _id }=req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{projects:req.body},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const addAchievements=async(req,res)=>{
    try {
        const { _id }=req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{achievements:req.body.achievements},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const addSocial=async(req,res)=>{
    try {
        const { _id }=req.user;
        const user=await User.findByIdAndUpdate({_id:_id},{social_links:req.body},{new:true});
        res.status(201).json({user});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
module.exports={getUser,registerUser,loginUser,addBasicInfo,addEducation,addProjects,addSkills,addWork,addAchievements,addSocial}
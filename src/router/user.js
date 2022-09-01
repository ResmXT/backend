const express=require('express');
const router=express.Router();
const authentication = require('../middleware/auth')
const {registerUser,loginUser, addBasicInfo,addEducation, addWork, addSkills, addProjects, addAchievements, getUser ,addSocial} = require('../controller/user')
router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/').get(authentication,getUser)
router.route('/basic-info').post(authentication,addBasicInfo);
router.route('/education').post(authentication,addEducation);
router.route('/work-experience').post(authentication,addWork);
router.route('/skills').post(authentication,addSkills);
router.route('/projects').post(authentication,addProjects);
router.route('/achievements').post(authentication,addAchievements);
router.route('/social').post(authentication,addSocial);
module.exports=router
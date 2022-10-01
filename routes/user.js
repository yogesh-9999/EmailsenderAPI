const express=require('express')
const router=express.Router();

const {addUsers}=require('../controllers/Users')

router.route('/').post(addUsers);

module.exports=router
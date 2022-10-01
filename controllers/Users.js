const Users=require('../models/Users')
const mailsender =require('../Mailsender/Email')


const addUsers=async(req,res)=>{

    // res.status(201).json({msg:'hello'})
    try {
        const user=await  Users.create(req.body);
        res.status(201).send(user);
       const {email}=req.body;
      console.log(email);

      await mailsender(email);


     console.log('success3');

    }catch (error) {
        console.log(error)
    }
   
}

module.exports={addUsers}
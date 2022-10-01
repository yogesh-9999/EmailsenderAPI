const nm=require('nodemailer')


const mailsender= (mailid)=>{
    const msg={
        from:"uvishnu9186@gmail.com",
        to:mailid,
        subject:"Subject testing",
        text:"Texting out "
    };
    
  return (nm.createTransport({
    service:'gmail',
    auth:{
        user:"uvishnu9186@gmail.com",
        pass:"mxjabqvmeysagpzg",

    },
    port:465,
    host:"smtp.gmail.com"
}).sendMail(msg,(err)=>{
if(err){
    return console.log(err)
}
else{
    return console.log('mail sent')
}
}))

}


module.exports=mailsender;


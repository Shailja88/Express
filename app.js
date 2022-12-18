const express=require("express");
const fs=require('fs');
const path=require('path')
const app=express();
const port=80;
//EXPRESS SPECIFIC STUFFS
app.use('/static',express.static('static')) //for serving static files 
app.use(express.urlencoded())

//PUG SPECEFIC STUFF
app.set('view engine','pug')//set the template engine as pug 
app.set('views',path.join(__dirname,'views'))// set the view directory

//Our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Genie', message: 'Hello there and thank you for learning pug!' })

// });
// app.get("/",(req,res)=>{
// res.status(200).send("This is home page of my first express app with Genie")
// });
// app.get("/about",(req,res)=>{
//     res.send("This is post request about page of my first express app with Genie")
//     });
//     app.post("/about",(req,res)=>{
//         res.send("This is about page of my first express app with Genie through post ")
//         });


//ENDS POINTS 
app.get('/',(req,res)=>{
    const con="This  is the best content on the iinternet so far so use it wisely. "
    const params={'title':'PUBG is the best game',"content":con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    const name=req.body.name;
     age=req.body.age;
     gender=req.body.gender;
     address=req.body.address;
     more=req.body.more;
     let outputToWrite=`The name of the client is ${name},${age} years old,${gender}, residing at ${address}, More about him/her ${more}`
    fs.writeFileSync('output.txt',outputToWrite)

     const params={'message':'Your form has been submitted successfully'}
     res.status(200).render('index.pug',params);
})
//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port} `)
})


//72  static files ko serve kr skte hai node js kk madad se
//static files vo file hoti hai jinko hum publicly rkhna chahte hai server me mtlb k koi bhi unko download kr skta hai and use kr skta hai ..
//template engine---->pug
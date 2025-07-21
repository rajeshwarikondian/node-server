import express from 'express';


const App = express()

//middleware
App.use(express.static("public"))

App.get("/",(req,res)=>{
 res.sendFile("/Users/rajeshwarikondian/workspace/zNodeJS_Repeat/NODEJS_PROJECT/Basic_server/pages/Home.html")
})
App.get("/about",(req,res)=>{
  res.sendFile("/Users/rajeshwarikondian/workspace/zNodeJS_Repeat/NODEJS_PROJECT/Basic_server/pages/About.html")
})
App.get("/contact",(req,res)=>{
  res.sendFile("/Users/rajeshwarikondian/workspace/zNodeJS_Repeat/NODEJS_PROJECT/Basic_server/pages/Contact.html")
})





App.listen("3000",()=>{
    console.log("server in http://localhost:3000");
    
})
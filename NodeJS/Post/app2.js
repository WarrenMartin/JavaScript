let express=require('express')
let app=express()
let bodyparser=require('body-parser')


// after getting body parser we need to decode it as the browser encodes the data before sending
app.use(bodyparser.urlencoded({extended:false})); 


app.get("/",(req,resp) =>{
    resp.sendFile('/radius.html',{root:__dirname})
})

app.post("/calcArea",(req,resp)=>{
    var radius=req.body.rad;
    let area=Math.PI * Math.pow(radius,2)
    resp.send("Area is" +area)
})

app.listen(3000,() =>{
    console.log("server is running on http://localhost:3000")
}) 

var express=require('express')

var app = express()

app.get('/',(req,resp)=>{
    resp.sendFile("/Form.html",{root:__dirname})
})

app.get('/disp',(req,res)=>{
   var ab= req.query.first;
   var bc=req.query.second;
   res.send(ab+" "+bc)
})


app.listen(3000,function(){
    console.log("http://localhost:3000")
})

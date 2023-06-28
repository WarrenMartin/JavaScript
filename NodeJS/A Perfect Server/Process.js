var http=require('http')
var url=require('url')
var fs=require('fs')

function process_req(req,res){
    if(req.method =='GET' && req.url =='/'){
        fs.readFile('radius.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }

    //req.url -/process?radius=100
    else if(req.method=='GET' && req.url.substring(0,8)=='/process'){
        var q=url.parse(req.url,true);
        var qdata=q.query;
        //{radius:'100'} qdata will be 100
        var r=qdata.radius;

        var rad=Math.PI +r*r;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("The area is "+rad);
        res.end();
    }

}


var server=http.createServer(process_req)
server.listen(3000);
console.log("server listening on localhost:3000");

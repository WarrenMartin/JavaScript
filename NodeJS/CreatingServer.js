
// creating a simle Nodejs Server

let http=require('http')


function processReq(req,resp){
    let str='<h1>hello world</h1>'
    let size=str.length
    resp.writeHead(200,{
        'content-length':size,
        'content-Type':'text/html'

    })

    resp.write(str);
    resp.end();
}

let server=http.createServer(processReq)

server.listen(3000,'127.0.0.1')

let fs=require('fs')


var data =fs.readFileSync("myfile.txt","utf-8")

console.log(data)


/* 
var data =fs.readFileSync("myfile.txt")

console.log(data.toString())
*/

// fs.writeFileSync("myfile.txt","Hello world")

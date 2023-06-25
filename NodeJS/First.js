console.log("before immediate")

setImmediate(()=>{
    console.log(":setImmediate executing")
})


setTimeout(() =>{
    console.log("executing setInterval in 3 sec"),7000
})

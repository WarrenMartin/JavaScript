let fs=require('fs')

/*
fs.readFile('myfile.txt',function(err,data){

        if(err){
            console.log(err);
        }
        else{
            console.log(data.toString())
        }

});

*/


fs.writeFile("stud.txt","myur \n mohit minal sai vivek",function(err){
    console.log(err)
})

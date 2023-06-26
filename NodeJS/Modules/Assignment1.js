//create a user defined local mdule greet.js containing a function greet that greets user based on time of the day.

function greet() {
    const currentHour= new Date().getHours();
    // console.log(currentHour);


    let greeting;
    if (currentHour >= 0 && currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    console.log(greeting);

    

}


module.exports={greet};

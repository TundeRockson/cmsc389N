const Cook = require('./Cook');

const myEmitter = new Cook("Bill Oakes", 123, "Chicken Parm", 40000, 3);

myEmitter.on('Cooked Correctly', function(){
    console.log('Delicious! Put a review in yelp, my ID number is: ' + myEmitter.ID);
})

myEmitter.on('I did my best', function(){
    myEmitter.salaryCut(10000); // Test values here
    // console.log('Salary Reduced. New Salary is ' + myEmitter.salary);
})

myEmitter.on('Going on strike', function(){
    myEmitter.salary = myEmitter.salary + (.1 * myEmitter.salary);  
    // console.log('Salary Increased. New Salary is ' + myEmitter.salary);
})

myEmitter.on('fine', function(){
    console.log('I’ll raise your wage next paycheck, I promise');

})




//Tests

// myEmitter.toString();
// myEmitter.makeFood("Spaghetti"); //I did my best event

// myEmitter.makeFood("Chicken Parm"); //Cooked Correctly event


// myEmitter.salaryCut(10000); //Going on Strike event

// myEmitter.salaryCut(1); //fine event, and cuts salary by 1

// myEmitter.toString();

// myEmitter.goOnBreak(1000); //Wait 1 second and print "Break Done!, also decrease number of breaks

// myEmitter.goOnBreak(1000);  //Wait 1 second and print "Break Done!, also decrease number of breaks

// myEmitter.goOnBreak(1000);  //Wait 1 second and print "Break Done!, also decrease number of breaks

// myEmitter.goOnBreak(1000);  //Prints No more breaks allowed!

// setTimeout(function(){
//     myEmitter.toString();
// }, 2000);
//Create a function that takes 3 arguments and returns the sum of the these arguments.
   function myFanction (a,b,c) {
   return a + b + c ;
   }


//Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
    function colorCar (color) {
    console.log("the color of my car is : " + color);

     }
     colorCar("red");

//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let details = {
firstName:"soumaia",
lastName:"mamo",
};

function showDetails (object) {
let properties = Object.keys(object);

let values = Object.values(object);
for ( var i=0 ; i<properties.length ; i++) {

    console.log(properties[i] + ":" +values[i]);


};

};

showDetails(details);



//Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color,code) {
var color ;
 if (code===1){
     console.log (color + " " + "car");
     
 } else if (code===2){
     console.log(color + " " +"motorbike");
     
 } else {
     console.log("undefined");


 }
}
;

vehicleType("blue",1);
vehicleType("green",2);

// write the following without the if statement, but with just as a single line with console.log : 
 3===3 ? console.log("yes") : console.log("no");

 //Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

 function vehicle(color,code,age) {
     if (code===1  &&   age >= 5)  {
     console.log("a" + " " +color + " "+ "used" +" car" );

     } else if(code===2  &&   age >= 5){
        console.log("a" + " " +color + " "+ "used" + " motorbike" );
     } 
     else {
         console.log( "this is a new machine " );
     }
 }

//  //a blue used car
//  vehicle("blue", 1, 5);

//  //a blue used motorbike
//  vehicle("blue", 2, 5);

//  //this is a new machine 
//  vehicle("blue", 2, 4);
 

//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
 let vehicles = [ "motorbike" , "caravan" , "bike" , "car"];

 //How do you get the third element from that list?
 console.log (vehicles [2]);


 //Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".


 
 function vehicle(color,code,age) {
    if (age > 2)  {
    console.log("a " +color + " "+ "used " + vehicles[code - 1]);
    } else {
    console.log("a " +color + " "+ "new "  + vehicles[code - 1]);
     }

}
//a green new bike 
vehicle("green", 3 , 1);

//a blue used bike 
vehicle("blue", 3 , 3);



//Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.

var advertisement = "Amazing Joe's Garage, we service: ";
for (var i=0 ; i<vehicles.length ; i++){
console.log(advertisement + vehicles);
}

//What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicles.push("track");
console.log(advertisement + vehicles);


//Create an empty object.
let newObject = { };

//Create an object that contains the teachers that you have had so far for the different modules.
let teachersNames = {
html:"mr.philip",
css:"mr.philip",
js:"mr. rogier"
};

//Add a property to the object you just created that contains the languages that they have taught you.
teachersNames.language="English";
console.log(teachersNames);

//Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1,2,3];
let y = [1,2,3];
let z = y;

console.log (x===z); //false.
console.log (x==y); //false.
console.log (y===z); //true .

//Take a look at the following code:
     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;

     o1.foo = "boo"; //only the first one changed.
     console.log(o1);//boo
     console.log(o2);//bar
     console.log(o3);//bar

     o2.foo = "doo"; //the second and the third one changed .
     console.log(o1);//boo
     console.log(o2);//doo
     console.log(o3);//doo

     //Does the order that you assign (o3 = o2 or o2 = o3) matter?
     console.log (o1===o2);//false
     console.log (o2===o3);//true
     console.log (o3===o2);//true
     //it does not matter .
     
     

     //What does the following code return? (And why?)
     let bar = 42;
     typeof typeof bar;

     //it will return to the typeof the typeof which is string .
     //if i run typeof bar , it will be "number" inside the sting .
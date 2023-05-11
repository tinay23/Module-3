var myname = "Yanit";
var myAge = "17";
var adultStatus ="";

if(myAge <18){
  adultStatus="child"
}else {
  adultStatus="adult";
}

console.log("my name is " + myname + "my age is " + myAge + "and i am a/an" + adultStatus);

// Print result to the browser screen
document.getElementById("result").innerHTML = "my name is " + myname + "my age is " + myAge + "and i am a/an" + adultStatus;

// Logical operators
// AND operator 
 var a = 10, b = 20, c = 20, d = 0;
 
console.log("Var1 = " + a);
console.log("Var2 = " + b);
console.log("Var3 = " + c);
 
// Using logical AND to verify two constraints
if ((a < b) && (b == c)) {
    d = a + b + c;
    console.log("The sum is: " + d);
} else {
    console.log("False conditions");
}

// OR operator  
 var a = 10, b = 1, c = 10, d = 30;
 
console.log("Var1 = " + a);
console.log("Var2 = " + b);
console.log("Var3 = " + c);
console.log("Var4 = " + d);
 
// Using logical OR to verify two constraints
if (a > b || c == d)
    console.log("One or both of the conditions are true");
else
    console.log("Both conditions are false");

// NOT operator
 var a = 5, b = 2;
 
console.log("Var1 = " + a);
console.log("Var2 = " + b);
 
// Using logical NOT operator
console.log("!(a < b) = " + !(a < b));
console.log("!(a > b) = " + !(a > b));

// Displaying last modified date using the DOM
document.getElementById("modified").innerHTML = document.lastModified;

// Decision structure with if statement and else statement
var num = 10;
if (num > 5) {
    console.log("Number is greater than 5");
    document.getElementById("result").innerHTML += "<br>Number is greater than 5";
} else {
    console.log("Number is less than or equal to 5");
    document.getElementById("result").innerHTML += "<br>Number is less than or equal to 5";
}

// Function that accepts arguments and returns data
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3)); 
document.getElementById("result").innerHTML += "<br>" + multiply(2, 3);

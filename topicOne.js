//object
var person = {
    firstname: "Dallen",
    lastname: "Cluff",
    age: 21
};

//array
var family = ["Dallen", "Krystal", "Sofia"];

//function
function doSomething() {
    //Alert when function is successfully called.
    window.alert('You\'ve successfully called doSomething function!');

    //Create an empty string called text
    var text = "";

    //Create a for loop, create an index variable and set it to 1.
    //Set loop condition, and increment by 1 with each successful loop.
    for (i = 1; i <= 5; i++) {
        text += i + " ";
    }

    document.getElementById('thingOne').innerHTML = text;

}

function doSomethingElse() {
    document.getElementById('thingTwo').innerHTML = person.age;
    document.getElementById('thingTwo').style.color = 'red';
}

function forLoop() {
    //Create a variable set to the value of the user's input.
    var userInput = document.getElementById('userInput').value;

    //document.getElementById('forLoop').innerHTML = userInput;

    //Create an empty string called text
    var text = "We can count up until we've looped the number of times you've requsted: <br><br>";

    //Create a for loop, create an index variable and set it to 1.
    //Set loop condition, and increment by 1 with each successful loop.
    for (i = 1; i <= userInput; i++) {
        text += i + "<br>";
    }

    document.getElementById('forLoop').innerHTML = text;
}

function whileLoop() {
    //Create a variable set to the value of the user's input.
    var userInput2 = document.getElementById('userInput2').value;

    //document.getElementById('forLoop').innerHTML = userInput;

    //Create an empty string called text
    var text = "We can count down while the number you input is greater than or equal to 0: <br><br>";

    //Create a for loop, create an index variable and set it to 1.
    //Set loop condition, and increment by 1 with each successful loop.
    while (userInput2 >= 0) {
        text += userInput2 + "<br>";
        userInput2--;
    }

    document.getElementById('whileLoop').innerHTML = text;
}

function doWhileLoop() {
    //Create a variable set to the value of the user's input.
    var userInput3 = document.getElementById('userInput3').value;

    //document.getElementById('forLoop').innerHTML = userInput;

    //Create an empty string called text
    var text = "We can count down while the number you input is greater than or equal to 0: <br><br>";

    //Create a for loop, create an index variable and set it to 1.
    //Set loop condition, and increment by 1 with each successful loop.
    while (userInput3 >= 0) {
        text += userInput3 + "<br>";
        userInput3--;
    }

    document.getElementById('doWhileLoop').innerHTML = text;
}

function myFunction() {
    color = prompt("Enter a color to have this function change the background!");
    document.body.style.backgroundColor = color;
}

var x = 5;
var y = 10;
var w = 0;
var text = "";

function addStuff(x, y) {
    x += 1;
    y += 1;
    w = (x + y);
    text += w;

    document.getElementById('addFunction').innerHTML = text;

    return (x + y)
}
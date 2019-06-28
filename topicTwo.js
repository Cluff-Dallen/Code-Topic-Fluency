function f1() {
    var dog = {
        breed: document.getElementById("userInput1").value,
        name: String(document.getElementById("userInput2").value),
        age: String(document.getElementById("userInput3").value)
    };

    document.getElementById("dogInfo").innerHTML = "Your Dog's Breed: " + dog.breed + "<br> Your Dog's Name: " + dog.name + "<br> Your Dog's Age: " + dog.age;
}

function f2() {
    function Dog(breed, name, age) {
        this.breedName = breed;
        this.dogName = name;
        this.age = age;
    }

    Dog.prototype.color = "Black and Brown";

    var myDog = new Dog("Lab", "Charlie", "5");

    document.getElementById("example2").innerHTML = myDog.color;
}

function f3() {
    var dog = {
        breed: "Lab",
        name: "Charlie",
        age: "3"
    };

    document.getElementById("example3").innerHTML = "dog.breed: " + dog.breed + "<br> dog.name: " + dog.name + "<br> dog.age: " + dog.age;
}

function f4() {
    var dog = {
        breed: "Lab",
        name: "Charlie",
        age: "3",
        dogFullName: function() { return this.name + " Cluff"; }
    };

    document.getElementById("example4").innerHTML = dog.dogFullName();
}
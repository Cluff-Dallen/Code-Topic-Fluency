< script > //JSON style text
    var text = '{"familyName":"Cluff", "familySize":3, "church":"LDS"}';

//Parse
var object = JSON.parse(text);

//Store text into our example paragraph on the webpage
document.getElementById("example").innerHTML = "Family Name: " + object.familyName + ", Family Size: " + object.familySize + ", Our Religion: " + object.church;

var myInfo = {
    firstName: "Dallen",
    lastName: "Cluff",
    major: "SoftwareEng"
};

var textJSON = JSON.stringify(myInfo);

document.getElementById("example2").innerHTML = textJSON;

var obj = {
    name: "John",
    age: 30,
    city: "New York"
};

var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON; <
/script>
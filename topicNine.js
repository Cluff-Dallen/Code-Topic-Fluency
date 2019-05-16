function f1() {
    alert("Function 1 Called!");

    var color = document.body.style.backgroundColor;

    if (color == 'white') {
        color = 'pink';
    } else {
        color = 'white';
    }

    document.body.style.backgroundColor = color;
}

function f2() {
    alert("Function 2 Called!");
    if (document.getElementById('radio1').checked) {
        document.body.style.backgroundColor = 'green';
    }
    if (document.getElementById('radio2').checked) {
        document.body.style.backgroundColor = 'red';
    }

    if (document.getElementById('radio3').checked) {
        document.body.style.backgroundColor = 'blue';
    }


}

function f3() {
    alert("Function 3 Called!");

}

function f4() {
    alert("This alert is shwowing because you've triggered the onload event!");
    document.getElementById("onLoad1").innerHTML = "The only reason this text is showing, is because the onLoad event was triggered! Otherwise this would be blank.";
}

function f5() {
    alert("Function 5 Called!");

    document.getElementById("imgHover").innerHTML = "<img src='softwarefunny.jpeg'>";


}
function f1() {
    var color = document.body.style.backgroundColor;

    //if the background is already white, make it pink. And vise versa!
    if (color == 'white') {
        color = 'pink';
    } else {
        color = 'white';
    }

    document.body.style.backgroundColor = color;
}

function f2() {

    //make the background the colore chosen by the radio input each time it's changed.
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
    //when a key is pressed on the webpage, make the bunny disappear
    alert("You've called the keydown event, now the bunny has disappeared!");
    document.getElementById("keydown1").innerHTML = "And just like that, your keypress triggered the event that made this bunny disappear!";
}

function f4() {
    //this is triggered upon page load, but load text and alert.
    alert("This alert is showing because you've triggered the onload event!");
    document.getElementById("onLoad1").innerHTML = "The only reason this text is showing, is because the onLoad event was triggered! Otherwise this would be blank.";
}

function f5() {
    //add an image upon hovering over button.
    document.getElementById("imgHover").innerHTML = "<img src='softwarefunny.jpeg'>";
}

function f6() {
    //change the image to the flipped version of the picture by replacing the text upon touch screen press. 
    document.getElementById("flip").innerHTML = '<img src="rightside.jpeg" alt="right side up book of mormon" ontouchstart="f6()" width="200px" height="200px"></img>';
}

function f7() {
    //when the user removes finger from touch screen, change the colore to red and change the text.
    document.getElementById("touchend1").style.background = "red";
    document.getElementById("touchend1").innerHTML = "You changed this text by making your finger leave!";
}
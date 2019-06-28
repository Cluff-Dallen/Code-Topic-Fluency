function f1() {
    const square = document.getElementById('divSeven');

    square.style.background = 'pink';
    square.style.width = '200px';
    square.style.height = '200px';
}

function f2() {

    var bar = document.getElementById("jsAnimation");

    var x = setInterval(move, 1);

    var p = 1;

    function move() {

        if (p != 100) {
            bar.style.left = p + 'px';
            p++;
        }

    }
}

function f3() {
    document.getElementById("square").style.transition = "all 2s";
    document.getElementById("square").style.transform = "skew(25deg)";
}
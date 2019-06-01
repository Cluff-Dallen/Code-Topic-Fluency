function f1() {
    var heading = document.createElement('h1');
    var text = document.createTextNode('Example Heading');
    heading.appendChild(text);
    document.body.appendChild(heading);
}

function f2() {
    var para = document.createElement('p');
    var text = document.createTextNode('Example paragraph text. You now have text inside the paragraph. DOM manipulation is the coolest. So glad that to have learned about it.');
    para.appendChild(text);
    document.body.appendChild(para);
}

function f4() {
    var newItem = document.createElement('li');
    var text = document.createTextNode('Green');
    newItem.appendChild(text);
    document.body.appendChild(newItem);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
}

function f5() {
    var newItem = document.createElement('li');
    var text = document.createTextNode('Pink');
    newItem.appendChild(text);
    document.body.appendChild(newItem);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
}
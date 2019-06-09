var requestURL = 'https://www.cryptonator.com/api/full/btc-usd';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.send();

request.onload = function() {

    var bitcoin = JSON.parse(request.responseText);
    document.getElementById('base').innerHTML = bitcoin.ticker.base;
    document.getElementById('target').innerHTML = bitcoin.ticker.target;
    document.getElementById('price').innerHTML = bitcoin.ticker.price;
    document.getElementById('volume').innerHTML = bitcoin.ticker.volume;
    document.getElementById('change').innerHTML = bitcoin.ticker.change;
}
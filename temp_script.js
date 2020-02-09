//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Wegmans' Request for all Products
var request = new XMLHttpRequest();
request.open('GET', 'https://api.wegmans.io/products/categories/561?api-version=2018-10-18', true);
request.setRequestHeader('Cache-Control', 'no-cache');
request.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');

request.onload = function () {
    console.log("return", request.responseText);
}
request.send();

/*
// Jack Request ADD
var addJackRequest = new XMLHttpRequest();

addJackRequest.open('ADD', 'localhost:5000', true);
addJackRequest.onload = function () {
	console.log("return", addJackRequest.response);
}
addJackRequest.send();


// Jack Request GET
var getJackRequest = new XMLHttpRequest();

getJackRequest.open('GET', 'localhost:5000', true);
getJackRequest.onload = function () {
	console.log("return", getJackRequest.response);
}
getJackRequest.send();
*/

function copyClipBoard(){
    var copyText = document.getElementById("shareableLink");
    copyText.select()
    document.execCommand("copy");
    alert("Copied!");
}

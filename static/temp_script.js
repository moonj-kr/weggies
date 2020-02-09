var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
*/


//Jack Request GET
//var getJackRequest = new XMLHttpRequest();
//
//getJackRequest.open('GET', 'localhost:5000/getAllProduct?url=back', true);
//getJackRequest.onload = function () {
//	console.log("return", getJackRequest.response);
//}
//getJackRequest.send();


function copyClipBoard(){
    var copyText = document.getElementById("shareableLink");
    copyText.select()
    document.execCommand("copy");
    alert("Copied!");
}
var listOfSKUVal;
var dataFromWegman;

function returnDataBaseResult(returnedVal){
    listOfSKUVal = returnedVal;
}

function manipulateHTML(){
    for SKU in listOfSKUVal:
        getDataFromWegman(sku);


}

function getDataFromWegman(sku){
}



function handleGetAllProduct(url) {
    getAllProduct(url);
    setTimeout(manipulateHTML(),500);
}
function getAllProduct(url) {
    var getJackRequest = new XMLHttpRequest();
    getJackRequest.open('GET', 'http://127.0.0.1:5000/getAllProduct?url=back', true);
    getJackRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
    getJackRequest.onload = function () {
        returnDataBaseResult(getJackRequest.response,true)
    };
    getJackRequest.send();
}

var jack = [];
function jackFunction (sku) {
	// sku is a string
	var request = new XMLHttpRequest();
	var url = "https://api.wegmans.io/products/" + sku  + "?api-version=2018-10-18";
	//https://api.wegmans.io/products/32431?api-version=2018-10-18
	request.open('GET', url, true);
	request.setRequestHeader('Cache-Control', 'no-cache');
	request.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');
	request.onload = function () {
		var food = JSON.parse(request.responseText);
		var jackArray = [food.name,food._links[0].href];
	returnDatabaseResult(jackArray);
	}
	request.send();
}

function returnDatabaseResult(value) {
	jack.append(value);
}

function getLink(url, skuID) {
	var linkRequest = new XMLHttpRequest();
	var fullURL = "https://api.wegmans.io" + url;
	linkRequest.open('GET', fullURL, true);
	linkRequest.setRequestHeader('Cache-Control', 'no-cache');
	linkRequest.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');

	linkRequest.onload = function( skuID) {
		var obj = (JSON.parse(linkRequest.responseText)).tradeIdentifiers;
		if (obj) {
			if (obj[0]) {
				if (obj[0].images) {
					let link = obj[0].images[(obj[0].images).length -1];
					console.log("print link: " + link);
				}
			}
		}
	}
	linkRequest.send();

}

function weggiesJack(listOfSKU) {
    for sku in listOfSKU:
	    jackFunction(sku);
	return(
	setTimeout(function() {
		return jack;
	},1000) );
}
var outSideListOfSKU = ['75639','499968']
function bigBoiFunction() {
//    weggiesJack(listOfSKU);
      weggiesJack(outSideListOfSKU);
      setTimeout(function() {
        console.log(jack);
       },3000);
}

bigBoiFunction();


//$(document).ready(
//    function() {
//        setInterval(function() {
//            bigBoiFunction();
//        }, 2000);
//    });

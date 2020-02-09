//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var waterfall = require('async-waterfall');

// Wegmans' Request for all Products
function wegmansRequest() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.wegmans.io/products/search?query=Bread&api-version=2018-10-18&subscription-key=d9fef061c16746a8baa2685dc8418ebb', true);
	request.setRequestHeader('Cache-Control', 'no-cache');
	request.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');

	request.onload = function () {
		var food = JSON.parse(request.responseText);

		var danielArray = [];
	// LINK TO JSON OBJ WITH IMAGE: food.results[items]._links[0].href

		for(var items in (food.results)) {
			var url = food.results[items]._links[0].href // LINK TO JSON OBJ WITH IMAGE
			var item = [food.results[items].sku, food.results[items].name, url];
			danielArray.push(item);
		}
	//console.log(danielArray);
		returnDatabaseResult(danielArray);
		//return danielArray;
	}

	request.send();
}

var global;

function returnDatabaseResult(value) {
	global = value;
	//console.log(global);
}


function weggies() {
	wegmansRequest()
	return(
	setTimeout(function() {
		return global;
	},5000) );
}

//console.log("TESTTT: " + weggies());

function getLink(url) {
	var linkRequest = new XMLHttpRequest();
	var fullURL = "https://api.wegmans.io" + url;
	linkRequest.open('GET', fullURL, true);
	linkRequest.setRequestHeader('Cache-Control', 'no-cache');
	linkRequest.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');

	linkRequest.onload = function() {

	}
	linkRequest.send();
}

function addJackRequest() {
	var addJackRequest = new XMLHttpRequest();

	addJackRequest.open('ADD', 'localhost:5000', true);
	addJackRequest.onload = function () {
		console.log("return", addJackRequest.response);
	}
	addJackRequest.send();
}

function getJackRequest() {
	var getJackRequest = new XMLHttpRequest();

	getJackRequest.open('GET', 'localhost:5000', true);
	getJackRequest.onload = function () {
		console.log("return", getJackRequest.response);
	}
	getJackRequest.send();
}
//getJackRequest.send();


function copyClipBoard(){
    var copyText = document.getElementById("shareableLink");
    copyText.select()
    document.execCommand("copy");
    alert("Copied!");
} 

function insertIntoItems(item){
    var box = document.getElementById("products");
    console.log(box);
    let div_box = document.createElement("DIV");
    div_box.setAttribute("id", item[0]);
    div_box.setAttribute("class", "item-container");
    div_box.setAttribute("onclick", "action(this.id)");
    let image = document.createElement("IMG");
    let paragraph = document.createElement("P");
    paragraph.innerHTML =  innerHTML = item[1];
    image.alt = ":D";
    div_box.appendChild(id);
    div_box.appendChild(image);
    div_box.appendChild(paragraph);
	box.appendChild(div_box);
	getLink(item[2], item[1]);
}

function action(id){
    const backURL = document.getElementById("id").value;
    console.log(backURL);
}

function jisooks(){
	for (var i = 0; i < global.length; i++){
		console.log(global[i]);
		insertIntoItems(global[i]);
	}
}
weggies();
setTimeout(jisooks, 1000);
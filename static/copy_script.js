//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var waterfall = require('async-waterfall');

// Wegmans' Request for all Products
function wegmansRequest() {
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.wegmans.io/products/search?query=Bread&api-version=2018-10-18&subscription-key=d9fef061c16746a8baa2685dc8418ebb', true);
	request.setRequestHeader('Cache-Control', 'no-cache');
	request.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');
	request.setRequestHeader('Access-Control-Allow-Origin', '*');

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
		//print global to test
		return global;
	},5000) );
}
//console.log("TESTTT: " + weggies());
//

function getLink(url, skuID) {
	var linkRequest = new XMLHttpRequest();
	var fullURL = "https://api.wegmans.io" + url;
	linkRequest.open('GET', fullURL, true);
	linkRequest.setRequestHeader('Cache-Control', 'no-cache');
	linkRequest.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');
	linkRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
	//console.log(skuID);
	var onDelegate = function(skuID){
		// console.log(skuID);
		var obj = (JSON.parse(linkRequest.responseText)).tradeIdentifiers;
		if (obj) {
			if (obj[0]) {
				if (obj[0].images) {
					//console.log("yeet: ", obj[0].images[(obj[0].images).length -1]);
					//console.log(typeof(obj[0].images[0]));
					//console.log(obj[0].images[(obj[0].images).length -1]);
					let link = obj[0].images[(obj[0].images).length -1];
					if (link != null) {
						let div = document.getElementById(skuID);
						let myimg = div.getElementsByTagName('img')[0];
						myimg.src = link;
					}
					// console.log(link);
					//returnVal = obj[0].images[(obj[0].images).length - 1];
					//return link;
					console.log(link);
					let div = document.getElementById(skuID);
					console.log(div);
					// console.log(skuID);
					// console.log(div);
				//	console.log("print link: " + link);
				//	arrayLink.push(link);
					//console.log(typeof(link));
				} 
			} 
		} 
	}
	 linkRequest.onload = function() {
		 onDelegate(skuID)
	 }//function(skuID) {
	// 	var obj = (JSON.parse(linkRequest.responseText)).tradeIdentifiers;
	// 	if (obj) {
	// 		if (obj[0]) {
	// 			if (obj[0].images) {
	// 				//console.log("yeet: ", obj[0].images[(obj[0].images).length -1]);
	// 				//console.log(typeof(obj[0].images[0]));
	// 				//console.log(obj[0].images[(obj[0].images).length -1]);
	// 				let link = obj[0].images[(obj[0].images).length -1];
	// 				// console.log(link);
	// 				//returnVal = obj[0].images[(obj[0].images).length - 1];
	// 				//return link;
	// 				let div = document.getElementById(skuID);
	// 				console.log(skuID);
	// 				// console.log(div);
	// 			//	console.log("print link: " + link);
	// 			//	arrayLink.push(link);
	// 				//console.log(typeof(link));
	// 			} 
	// 		} 
	// 	} 
	// }
	linkRequest.send();	
}

// getLink("/products/75634?api-version=2018-10-18&subscription-key=d9fef061c16746a8baa2685dc8418ebb");

// take in sku, return name and image
/*
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

*/
function copyClipBoard(){
    var copyText = document.getElementById("shareableLink");
    copyText.select()
    document.execCommand("copy");
    alert("Copied!");
}

function addProductToURL(productID) {
    var url = document.getElementById('nice').getAttribute('value');
    console.log("Ridiculous "+ productID);
    var inputValueFormat = "url="+url+"&sku="+productID;
    var getJackRequest = new XMLHttpRequest();
    getJackRequest.open('POST', 'http://127.0.0.1:5000/add', true);
    getJackRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
    getJackRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    getJackRequest.onreadystatechange = function() {//Call a function when the state changes.
    if(getJackRequest.readyState == 4 && getJackRequest.status == 200) {
        }
    }
    getJackRequest.send(inputValueFormat);
}

function insertIntoItems(item){
    var box = document.getElementById("products");
    let div_box = document.createElement("DIV");
    div_box.setAttribute("id", item[0]);
    div_box.setAttribute("class", "item-container");
    div_box.setAttribute("onclick", "addProductToURL(this.id)");
    let image = document.createElement("IMG");

    let paragraph = document.createElement("P");
    paragraph.innerHTML =  innerHTML = item[1];
	image.alt = ":D";
	image.src = "https://via.placeholder.com/150";
    div_box.appendChild(id);
    div_box.appendChild(image);
    div_box.appendChild(paragraph);
	box.appendChild(div_box);
	getLink(item[2], item[0]);
}

function action(id){
    const backURL = document.getElementById("id").value;
    console.log(backURL);
}

function jisooks(){
	for (var i = 0; i < 24; i++){
		// console.log(global[i]);
		insertIntoItems(global[i]);
	}
}

function bigBoiFunction(){
	weggies();
	setTimeout(jisooks, 3000);
}

bigBoiFunction()
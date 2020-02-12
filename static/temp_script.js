// Wegmans' Request for all Products
var request = new XMLHttpRequest();
request.open('GET', 'https://api.wegmans.io/products/categories/561?api-version=2018-10-18', true);
request.setRequestHeader('Cache-Control', 'no-cache');
request.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');

request.onload = function () {
	//console.log("return", request.responseText);
}
request.send();

function copyClipBoard(){
    var copyText = document.getElementById("shareableLink");
    copyText.select()
    document.execCommand("copy");
    alert("Copied!");
}
var listOfSKUVal = [];
var listOfParsedValue = [];

function addValueToParsedValue(value) {
//    console.log(value);
	listOfParsedValue.push(value);
}

function addValueToSKUVal(returnedVal){
    listOfSKUVal = returnedVal.slice(1,returnedVal.length-1).split(',')
    console.log(listOfSKUVal);
}

function getAllProductSKU() {
    var url = document.getElementById('nice').getAttribute('value');
    var getJackRequest = new XMLHttpRequest();
    getJackRequest.open('GET', 'http://127.0.0.1:5000/getAllProduct?url='+url, true);
    getJackRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
    getJackRequest.onload = function () {
        addValueToSKUVal(getJackRequest.response)
    };
    getJackRequest.send();
}

function converAllSKU() {
    for (var i = 0; i < listOfSKUVal.length; i++) {
        if (listOfSKUVal[i] != ["]"]) {
            convertOneSKU(listOfSKUVal[i])
        }
    }
}

function output() {
    console.log(listOfParsedValue.length)
}

 function convertOneSKU (sku) {
	var request = new XMLHttpRequest();
	var url = "https://api.wegmans.io/products/" + sku  + "?api-version=2018-10-18";
	//https://api.wegmans.io/products/32431?api-version=2018-10-18
	request.open('GET', url, true);
	request.setRequestHeader('Cache-Control', 'no-cache');
	request.setRequestHeader('Subscription-Key', '95037736472f4c98a5b3efbc8fb25224');
	var putInSKU = function(sku) {
		var food = JSON.parse(request.responseText);
		var parsedValue = [sku,food.name];
		if(food._links != null) {
		    var links = food._links[0].href;
		    parsedValue.push(links);
		} else {
	        parsedValue.push("Some Default");
		}
	    addValueToParsedValue(parsedValue);
	}
	request.onload = function () {
        putInSKU(sku);
	}
	request.send();
}

function getLinks(url, skuID) {
	var linkRequest = new XMLHttpRequest();
	var fullURL = "https://api.wegmans.io" + url;
	linkRequest.open('GET', fullURL, true);
	linkRequest.setRequestHeader('Cache-Control', 'no-cache');
	linkRequest.setRequestHeader('Subscription-Key', '95037736472f4c98a5b3efbc8fb25224');
	linkRequest.setRequestHeader('Access-Control-Allow-Origin', '*');
	var onDelegate = function(skuID){
	    console.log(linkRequest);
		var obj = (JSON.parse(linkRequest.response)).tradeIdentifiers;
		console.log(obj);
		if (obj) {
			if (obj[0]) {
				if (obj[0].images) {
					let link = obj[0].images[(obj[0].images).length -1];
					if (link != null) {
						let div = document.getElementById(skuID+"r");
						let myimg = div.getElementsByTagName('img')[0];
						myimg.src = link;
					}
//					let div = document.getElementById(skuID);
				}
			}
		}
	}
	linkRequest.onload = function() {
		 onDelegate(skuID)
	}
	linkRequest.send();
}


function insertIntoItemsRight(item){
    var box = document.getElementById("cart");
    let div_box = document.createElement("DIV");
    div_box.setAttribute("id", item[0]+"r");
    div_box.setAttribute("class", "item-containerRight");
    let image = document.createElement("IMG");
    let paragraph = document.createElement("P");
    paragraph.innerHTML =  innerHTML = item[1];
	image.alt = ":D";
	image.src="/static/bread.jpg"
    div_box.appendChild(id);
    div_box.appendChild(image);
    div_box.appendChild(paragraph);
    if (item[1] != null){
	    box.appendChild(div_box);
	}
	getLinks(item[2], item[0]);
}


function addRightHandSide() {
    //[sku,name,img]
    for (var i =0; i < listOfParsedValue.length-1; i++) {
        if (listOfParsedValue != null){
            insertIntoItemsRight(listOfParsedValue[i]);
        }
    }
}

function bigDudeFunction(){
	getAllProductSKU();
	setTimeout(converAllSKU, 2000);
	setTimeout(addRightHandSide,4000);
}

bigDudeFunction();

//$(document).ready(
//    function() {
//        setInterval(function() {
//            bigBoiFunction();
//        }, 5000);
//});




var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Wegmans' Request for all Products
var request = new XMLHttpRequest();
request.open('GET', 'https://api.wegmans.io/products/categories?api-version=2018-10-18', true);
request.setRequestHeader('Cache-Control', 'no-cache');
request.setRequestHeader('Subscription-Key', 'd9fef061c16746a8baa2685dc8418ebb');

request.onload = function () {
	console.log("return", request.responseText);
}
request.send();


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

function copyClipBoard(){
    var copyText = document.getElementById("shareableLink");
    copyText.select()
    document.execCommand("copy");
    alert("Copied!");
}

function fetchMeDaddy(){
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else { // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        var result = this.responseText;
        //document.getElementById("info").innerHTML=result; //Prints raw data
        var r = JSON.parse(this.responseText);
        console.log(r);
      }
    }
      xmlhttp.open("GET", "", true);
      xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlhttp.send();
  }

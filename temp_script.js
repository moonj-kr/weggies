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

  
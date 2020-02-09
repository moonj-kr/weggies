//import {getAllProduct, addProductToURL} from './temp_script.js';
//let testdata = [["1234", "name","https://via.placeholder.com/150"], ["4321","name1","https://via.placeholder.com/150"], ["5123","name2","https://via.placeholder.com/150"],["9191","name","https://via.placeholder.com/150"], ["1010","name1","https://via.placeholder.com/150"], ["5135","name2","https://via.placeholder.com/150"],["1424","name","https://via.placeholder.com/150"], ["1234","name1","https://via.placeholder.com/150"], ["1234","name2","https://via.placeholder.com/150"],["1234","name","https://via.placeholder.com/150"], ["1234","name1","https://via.placeholder.com/150"], ["1234","name2","https://via.placeholder.com/150"],["1234","name","https://via.placeholder.com/150"], ["1234","name1","https://via.placeholder.com/150"], ["1234","name2","https://via.placeholder.com/150"]];
var jisookData = 

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
    image.src = item[2];
    image.alt = ":D";
    div_box.appendChild(id);
    div_box.appendChild(image);
    div_box.appendChild(paragraph);
    box.appendChild(div_box);
}

function action(id){
    const backURL = document.getElementById("id").value;
    console.log(backURL);
}

for (var i = 0; i < testdata.length; i++){
    insertIntoItems(testdata[i]);
}

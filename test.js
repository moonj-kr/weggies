let testdata = [["name","https://via.placeholder.com/150"], ["name1","https://via.placeholder.com/150"], ["name2","https://via.placeholder.com/150"],["name","https://via.placeholder.com/150"], ["name1","https://via.placeholder.com/150"], ["name2","https://via.placeholder.com/150"],["name","https://via.placeholder.com/150"], ["name1","https://via.placeholder.com/150"], ["name2","https://via.placeholder.com/150"],["name","https://via.placeholder.com/150"], ["name1","https://via.placeholder.com/150"], ["name2","https://via.placeholder.com/150"],["name","https://via.placeholder.com/150"], ["name1","https://via.placeholder.com/150"], ["name2","https://via.placeholder.com/150"]];

function insertIntoItems(item){
    var box = document.getElementById("products");
    console.log(box);
    let div_box = document.createElement("DIV");
    div_box.setAttribute("class", "item-container");
    div_box.setAttribute("onclick", "action()");
    let paragraph = document.createElement("P");
    paragraph.innerHTML =  innerHTML = item[0]
    let image = document.createElement("IMG");
    image.src = item[1];
    image.alt = ":D";
    div_box.appendChild(paragraph);
    div_box.appendChild(image);
    box.appendChild(div_box);
}

function action(){
    alert("This item was added");
}

for (var i = 0; i < testdata.length; i++){
    insertIntoItems(testdata[i]);
}

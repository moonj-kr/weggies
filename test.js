let testdata = ["name","https://via.placeholder.com/150"];

function insertIntoItems(item){
    var box = document.getElementById("products");
    console.log(box);
    let div_box = document.createElement("DIV");
    let paragraph = document.createElement("P");
    paragraph.innerHTML =  innerHTML = item[0]
    let image = document.createElement("IMG");
    image.src = item[1];
    image.alt = ":D";
    div_box.appendChild(paragraph);
    div_box.appendChild(image);
    box.appendChild(div_box);
}

insertIntoItems(testdata);
import {getAllProduct} from './temp_script.js';

$(document).ready(
    function() {
        setInterval(function() {
//            const backURL = document.getElementById("id").value;
//            getAllProduct(backURL);
            var randomnumber = Math.floor(Math.random() * 100);
            $('#cart').text(
                    'I am getting refreshed every 3 seconds..! Random Number ==> '
                            + randomnumber);
        }, 1000);
    });


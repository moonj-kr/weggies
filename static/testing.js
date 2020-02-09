

$(document).ready(
    function() {
        setInterval(function() {
            var randomnumber = Math.floor(Math.random() * 100);
            $('#cart').text(
                    'I am getting refreshed every 3 seconds..! Random Number ==> '
                            + randomnumber);
        }, 1000);
    });


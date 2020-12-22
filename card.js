function getCardInfo(id) {
    number = document.getElementById(id).value;
    if (number.length == 6) {
        $.ajax({
            url: 'info.json?v=1.0.0.5',
            dataType: 'json',
            //remove this part (beforsend) for use in site
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            success: function(json) {
                var data = JSON.parse(JSON.stringify(json));
                for (i = 0; i < data.cards.length; i++) {
                    if (data.cards[i].number == number) {
                        document.getElementById('bankName').innerText = data.cards[i].name;
                    }
                }
            },
            statusCode: {
                404: function() {
                    alert('There was a problem with the server.  Try again soon!');
                }
            }
        });
    }
};
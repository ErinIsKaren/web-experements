    function sendMessage() {

        var a = document.getElementById("webhookURL");
        var a = document.getElementById("webhookTitle");
        var a = document.getElementById("webhookDscription");

        var request = new XMLHttpRequest();
        request.open("POST", `${webhookURL.value}`);

        request.setRequestHeader('Content-type', 'application/json');

        var embed = {
            "embeds": [{
                "title": `${webhookTitle.value}`,
                "description": `${webhookDescription.value}`,
                "color": 7703551
            }]
        }

        request.send(JSON.stringify(embed));
    }

    /*  */
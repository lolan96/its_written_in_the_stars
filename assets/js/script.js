$('#btn').on('click', function() {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=taurus&day=today",
        "method": "POST",
        "headers": {
            "X-RapidAPI-Key": "c973172611msh61d40a4a3bea534p1473e5jsn02c835257f47",
            "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).then(function (response) {
        console.log(response);

        var outputs = response.description;
        $('#test').append(outputs);
});
});
$( document ).ready(function() {
 // localstorage ouputs for starsign and name
  var nameLocalStorage = localStorage.getItem("nameEntry");
  var starSignLocalStorage = localStorage.getItem("starSignEntry")
  console.log(starSignLocalStorage);
  console.log(nameLocalStorage);
    // api call for data based on starsign
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + starSignLocalStorage + "&day=today",
        "method": "POST",
        "headers": {
            "X-RapidAPI-Key": "c973172611msh61d40a4a3bea534p1473e5jsn02c835257f47",
            "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).then(function (response) {
        console.log(response);
        var nameFortune = nameLocalStorage + ", your daily fortune awaits...";
        $('#name').append(nameFortune);

       // output for color from starsign api
        var colorOutput = response.color;
        $('#color').append(colorOutput).val();
        var numberOutput = response.lucky_number;
        $('#number').append(numberOutput).val();
        var moodOutput = response.mood;
        var fortuneOutput = response.description;
        $('#fortune').append(fortuneOutput).val();


        
      
        // api call for giphy api with colorOutput
        var queryURLcolor = "https://api.giphy.com/v1/gifs/random?api_key=iTlqWT1GAonqCLPWWB15I2HfB3BaNfp5&tag=" + colorOutput + "&rating=pg";

       // placing random gif based on color on page
        $.ajax({
          url: queryURLcolor,
          method: "GET"
        }) 
          .then(function(responseTwo) {
            console.log(responseTwo)
            var results = responseTwo.data.images.original.url;
            var imgTag = $("<img>");
            imgTag.attr("src", results);
            console.log(results);
            $('#colorGIF').append(imgTag);
        
        
        });
       
        var queryURLmood = "https://api.giphy.com/v1/gifs/random?api_key=iTlqWT1GAonqCLPWWB15I2HfB3BaNfp5&tag=" + moodOutput + "&rating=pg";

        // placing mood gif based on color on page
        $.ajax({
          url: queryURLmood,
          method: "GET"
        }) 
          .then(function(responseThree) {
            console.log(responseThree)
            var results2 = responseThree.data.images.original.url;
            var imgTag2 = $("<img>");
            imgTag2.attr("src", results2);
            console.log(results2);
            $('#moodGIF').append(imgTag2);

            
        });

    });

  });

  $('#return').on('click', function() {
     location.replace('index1.html')

});
$( document ).ready(function() {
 // localstorage ouputs for starsign and name
  var nameLocalStorage = localStorage.getItem("nameEntry");
  var starSignLocalStorage = localStorage.getItem("starSignEntry")
  
    // aztro API
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
    // API call for aztro api with data based on starsign
    $.ajax(settings).then(function (response) {
        console.log(response);

        // appending name to web page
        var nameFortune = nameLocalStorage + ", your daily fortune awaits...";
        // apending name to webpage
        $('#name').append(nameFortune);

        // output for color value from aztro API 
        var colorOutput = response.color;
       // appending color to webpage
        $('#color').append(colorOutput).val();

       // output for lucky number value from aztro API 
        var numberOutput = response.lucky_number;
       // apending lucky number to webpage
        $('#number').append(numberOutput).val();

       // ouput for mood from aztro API
        var moodOutput = response.mood;
        $('#mood').append(moodOutput).val();


       // output for fortune from aztro API
        var fortuneOutput = response.description;
        $('#fortune').append(fortuneOutput).val();

       // output for color from aztro API to link to giphy API
        //var colorOutput = response.color;

       // output for lucky number from aztro API to link to giphy API
        //var numberOutput = response.lucky_number;

       // API call for giphy API with color output
        var queryURLcolor = "https://api.giphy.com/v1/gifs/random?api_key=iTlqWT1GAonqCLPWWB15I2HfB3BaNfp5&rating=pg&tag=" + colorOutput + "&rating=pg";

       // placing random gif based on color on page
        $.ajax({
          url: queryURLcolor,
          method: "GET"
        }) 
          .then(function(responseTwo) {
            console.log(responseTwo);
            var results = responseTwo.data.images.original.url;
            var imgTag = $("<img>");
            imgTag.attr("src", results);
            imgTag.attr("alt", "Your color gif: " + colorOutput);
            console.log(results);
            $('#colorGIF').append(imgTag);
            imgTag.css({"max-height":"auto", "max-width":"100%"});
            
        });
        
        // API call for giphy API with mood output
        var queryURLmood = "https://api.giphy.com/v1/gifs/random?api_key=iTlqWT1GAonqCLPWWB15I2HfB3BaNfp5&rating=pg&tag=" + moodOutput + "&rating=pg";

        // placing mood gif based on mood on page
        $.ajax({
          url: queryURLmood,
          method: "GET"
        }) 
          .then(function(responseThree) {
            console.log(responseThree);
            var results2 = responseThree.data.images.original.url;
            var imgTag2 = $("<img>");
            imgTag2.attr("src", results2);
            imgTag2.attr("alt", "Your color gif: " + moodOutput);
            console.log(results2);
            $('#moodGIF').append(imgTag2);
            imgTag2.css({"max-height":"auto", "max-width":"100%"});
        });
        
    });  
});
  // button that allows user to retutn to landing page
  $('#return').on('click', function() {
     location.replace('index1.html')

  });
$('#form').on('submit', function (event) {
    event.preventDefault();
    var nameEntry = $("#nameInput").val();
    var starSignEntry = $("#starSigns").val();
    console.log(starSignEntry);
    console.log(nameEntry);

    localStorage.setItem("nameEntry",nameEntry);
    localStorage.setItem("starSignEntry",starSignEntry);
    location.replace('index2.html')

});
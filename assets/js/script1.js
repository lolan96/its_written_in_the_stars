$('#form').on('submit', function (event) {
    event.preventDefault();
    var nameEntry = $("#nameInput").val();
    var starSignEntry = $("#starSigns").val();
    console.log(starSignEntry);
    console.log(nameEntry);

    localStorage.setItem("nameEntry",nameEntry);
    localStorage.setItem("starSignEntry",starSignEntry);
    location.replace('landing.html')

    

});

$( document ).ready(function() {
    var nameLocalStorage = localStorage.getItem("nameEntry");
    var starSignLocalStorage = localStorage.getItem("starSignEntry")

    $('#nameInput').val(nameLocalStorage);
    $("#starSigns").val(starSignLocalStorage)
})
$(document).ready(function() {
    $(".forms-section img").click(function() {
        $('#carouselExampleIndicators').show();
    });

    $("#carouselExampleIndicators .close").click(function() {
        $('#carouselExampleIndicators').hide();
    });
})
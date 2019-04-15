$(document).ready(function () {
    console.log("ready");

    $(".service-button").on("click", function (event) {
        console.log("button clicked");
        event.preventDefault();
        console.log($(this).attr("id"))
        $.ajax({
            url: "/",
            success: function (result) {
                // $("#div1").html(result);
                console.log("ajax result:", result)
            }
        });
        // ajax request for data - week7/day-4 - movies
    });

});

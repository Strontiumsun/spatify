$(document).ready(function () {
    console.log("ready");

    $(".service-button").on("click", function () {
        // console.log("clicked " + $(this).attr("data-name"))

        var buttonName = $(this).attr("data-name");
        console.log(buttonName)

        $.ajax({
            url: `/api/salons/services/${buttonName}`,
            method: "GET"
        }).then(function (data) {
            console.log(data[0].name)
            for (var i = 0; i < data.length; i++) {
                $("#append-here").append(`<h1>${data[i].name}</h1>`)
            }
        })
    })
    // $("#services").on("click", function (event) {
    //     $(".about-container").hide();
    //     // $(".filler-container").append($(".search-result"))
    //     console.log("services button clicked");
    //     event.preventDefault();
    //     // ajax request for data - week7/day-4 - movies
    // });

});

// on click button when...
// if on click is working
// grab data attribute
// ajax call
// GET route
// /api/salons/services/ + data-attribute var
//


$(document).ready(function () {
    console.log("ready");

    $("#formSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        $.get("/email", function (data) {
            console.log(data);
        });
    });


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
                $("#append-here").append(`<div class="card-image"><img src='${data[i].image}'><span class="card-title">
                                        <h5>${data[i].name}</h5>
                                    </span>
                                   <div class="card-content">
            
                                      <p>${data[i].services}</p>
            
                                   </div>
                              </div>`)
            }
        })
    })
});

// on click button when...
// if on click is working
// grab data attribute
// ajax call
// GET route
// /api/salons/services/ + data-attribute var
//


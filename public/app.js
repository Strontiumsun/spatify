$(document).ready(function () {
    console.log("ready");

    $(".service-button").on("click", function (event) {
        event.preventDefault();
        var salonType = $(this).attr("id")
        $.get(`/api/salons/services/${salonType}`, function (data) {
            console.log("gfxgfxgfx", data)
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].services)
                var serv = data[i].services;
                console.log("service: ", serv)

                $("#result").append(`
                <div class="col s12 m6 l4">
                    <div class="card text-center">
                        <div class="card-body" style="background-image: url('{{image}}');">
                            <h5 class="card-title">{{name}}</h5>
                            <p class="card-text">{{services}}</p>
                            <a href="#" class="btn btn-primary">placeholder</a>
                        </div>
                    </div>
                </div>
                `)
            }
        });
        // });
    });


    $("#formSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        $.get("/email", function (data) {
            console.log(data);
        });
    });
});

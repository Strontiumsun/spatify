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
                        <div class="card">
                            <div class="card-image">
                        <img src='${data[i].image}'>
                        <span class="card-title">
                            <h5>'${data[i].name}'</h5>
                        </span>
                        <div class="card-content">

                            <p>'${data[i].services}'</p>
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

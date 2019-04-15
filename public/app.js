$(document).ready(function () {
    console.log("ready");

    $(".service-button").on("click", function (event) {
        event.preventDefault();
        var salonType = $(this).attr("id")
        $.get("/api/salons", function (data) {
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].services)
                var serv = data[i].services;
                // console.log(serv)
                // console.log(salonType)
            }
            if (serv == salonType) {
                console.log("match found")
            } else {
                console.log("no match found")
            }
        });
        // });
    });
});

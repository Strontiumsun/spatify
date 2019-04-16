$(document).ready(function () {
    console.log("ready");

    var userData = [];
    var name = "";
    var image = "";
    var services = "";

    $(".service-button").on("click", function (event) {
        event.preventDefault();
        var salonType = $(this).attr("id")
        $.get("/api/salons", function (data) {
            for (var i = 0; i < data.length; i++) {
                services = data[i].services
                name = data[i].name
                image = data[i].image
                if (services == salonType) {
                    userData.push(name)
                    cardAppend(data)
                }
            }
        });
    });

    function cardAppend(data) {
        $("#result").append(`
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
            <img src=${image}>
            <span class="card-title">
                <h5>'${name}'></h5>
            </span>
            <div class="card-content">
            <p>'${services}'</p>
            </div>
            </div>
            `)
    }


    $("#formSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        $.get("/email", function (data) {
            console.log(data);
        });
    });
});

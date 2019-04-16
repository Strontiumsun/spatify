$(document).ready(function () {
    console.log("ready");

    var userData = [];
    var name = "";
    var image = "";
    var services = "";

    $(".service-button").on("click", function (event) {
        event.preventDefault();
        var salonType = $(this).attr("id")
        $.get(`/api/salons/services/${salonType}`, function (data) {
            // console.log("gfxgfxgfx", data)
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].services)
                userData = data[i];
                console.log("all: ", userData)
                services = data[i].services;
                image = `${data[i].image}`
                name = `${data[i].name}`
                // console.log(name)
                // $("#result").append(`
                //     <div class="col s12 m6 l4">
                //         <div class="card">
                //             <div class="card-image">
                //         <img src='${data[i].image}'>
                //         <span class="card-title">
                //             <h5>'${data[i].name}'</h5>
                //         </span>
                //         <div class="card-content">

                //             <p>'${data[i].services}'</p>
                //         </div>
                //     </div>
                //     `)
            }
            // cardAppend(data)
        });
        // });

    });

    function cardAppend(data) {
        console.log("name: ", name)
        userData.push(name)
        console.log("results: ", userData)
        $("#result").append(`
        <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
            <img src='image'>
            <span class="card-title">
                <h5>'name'</h5>
            </span>
            <div class="card-content">

            </div>
            </div>
            `)
    }
    // <p>'${data[i].services}'</p>


    $("#formSubmit").on("click", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        $.get("/email", function (data) {
            console.log(data);
        });
    });
});

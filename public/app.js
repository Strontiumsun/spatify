$(document).ready(function () {
    console.log("ready");

    $(".service-button").on("click", function (event) {
        $(".service-button").on("click", function (event) {
            event.preventDefault();
            var salonType = $(this).attr("id")
            $.ajax({
                url: "/services",
                function(req, res) {
                    db.Salon.findAll(
                        {
                            where: {
                                name: "Lotus Spa"
                            }
                        }).then(function (data) {
                            console.log(data);
                            res.render(
                                "services",
                                //add object here
                                { data: data[0] }
                            );
                        });

                }
                // ajax request for data - week7/day-4 - movies

            });

        });
    });
});

$(document).ready(function() {
  console.log("ready");

  $(".time").on("click", function(event) {
    if ($(".time").find(".active")) {
      $(".time").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $("#formSubmit").on("click", function(event) {
    event.preventDefault();
    var userEmail = $("#email")
      .val()
      .trim();
    var userName = $("#full_name")
      .val()
      .trim();
    var userDate = $("#user_date")
      .val()
      .trim();
    var userTime = $(".active").text();

    console.log("THIS!!!", userTime);
    console.log("user email!", userEmail);
    console.log("form submitted!");

    var userInfo = {
      userEmail: userEmail,
      userName: userName,
      userDate: userDate,
      userTime: userTime //We need to get some unique property to identify which time button was clicked
    };
    if (userInfo.userEmail === "") {
      alert("enter valid email");
    } else {
      $.post("/email", userInfo);
      if ($(".time").find(".active")) {
        $(this).removeClass("active");
        alert("Reservation Confirmed! Check your email!");
        window.location.href = "/";
      }
    }
  });

  $(".service-button").on("click", function() {
    // console.log("clicked " + $(this).attr("data-name"))
    $("#append-here").empty();
    var buttonName = $(this).attr("data-name");
    console.log(buttonName);

    $.ajax({
      url: `/api/salons/services/${buttonName}`,
      method: "GET"
    }).then(function(data) {
      console.log(data[0].name);
      for (var i = 0; i < data.length; i++) {
        //var card = $("<div>").attr("class", "card");
        //var cardImage = $("<div>").attr("class", "card-image");
        //var image = $("<img>").attr("src", `${data[i].image}`);
        //var cardTitle = $("<span>").attr("class", "card-title");
        //var title = $("<h5>").html(`${data[i].name}`);
        //var cardContent = $("<div>").attr("class", "card-content");
        //var cardText = $("<p>").html(`${data[i].services}`);

        //cardTitle.append(title, cardText);
        //cardImage.append(image);
        //card.append(cardImage, cardTitle);
        //$("#append-here").append(card);
        $("#append-here").append(`
                
                <div class="col s12 m6 l4">
                <div class="card">
                <div class="card-image">
                <img src='${data[i].image}'> 
                <span class="card-title"><h5>${data[i].name}</h5></span>
                </div>
                <div class="card-content">
                    <p>${data[i].services}</p>
                </div>
                <div class="card-action">
                  <a href="/form">RESERVE</a>
                </div>
                </div> 
                </div>`);
      }
    });
  });

  $(".datepicker").datepicker();
});

{
  /* <a href="/api/${data[i].id}">RESERVE</a> */
}
// on click button when...
// if on click is working
// grab data attribute
// ajax call
// GET route
// /api/salons/services/ + data-attribute var
//

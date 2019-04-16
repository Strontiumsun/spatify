$(document).ready(function() {
  console.log("ready");
  $(".datepicker").datepicker();

  $(".time").on("click", function(event) {
    if ($(".time").find(".active")) {
      $(".time").removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $(document).on("click", "#formSubmit", function(event) {
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
                  <button class="click-form" data-id="${
                    data[i].id
                  }" data-services="${data[i].services}" data-name="${
          data[i].name
        }" >RESERVE</button>
                </div> 
                </div>`);
      }
    });

    $(document).on("click", ".click-form", function() {
      var formID = $(this).attr("data-id");
      var formService = $(this).attr("data-services");
      var formName = $(this).attr("data-name");
      // location.reload("/form");
      // console.log(formService)
      $.ajax({
        url: `/api/salons/services/${formService}/${formID}`,
        method: "GET"
      }).then(function(data) {
        console.log(data);
        var times = data.times;
        console.log(times);
        $(".search-result").empty();
        $(".search-result").append(`<div class="container">
                <div class="form-style">
                    <div id="spa-name">You chose: ${formName}</div>
                    <div class="row">
                        <div class="input-field col s6">
                            Your Name:
                            <input id="full_name" type="text" class="validate" />
                            
                        </div>
                        <div class="input-field col s6">
                            Date:
                            <input type="text" id="user_date" class="datepicker" />
                            
                        </div>
                    </div>
                    <div class="row">
                        <button class="time" id="time1">${
                          data.times[0]
                        }</button>
                        <button class="time" id="time2">11:00</button>
                        <button class="time" id="time3">12:00</button>
                        <button class="time" id="time4">13:00</button>
                        <button class="time" id="time5">14:00</button>
                        <button class="time" id="time6">15:00</button>
                        <button class="time" id="time7">16:00</button>
                        <button class="time" id="time8">17:00</button>
                    </div>
            
                    <form action="/" method="POST">
                        Email:
                        <input type="text" id="email" />
                    </form>
                    <br />
            
                    <button class="submit" type="submit" id="formSubmit">Submit</button>
                </div>
            </div>`);
      });
    });
  });
});

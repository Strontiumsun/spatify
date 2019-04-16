$(document).ready(function() {
  console.log("ready");

  $("#services").on("click", function(event) {
    $(".about-container").hide();
    // $(".filler-container").append($(".search-result"))
    console.log("services button clicked");
    event.preventDefault();
    // ajax request for data - week7/day-4 - movies
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
    // var userTime = $(this.time)
    //   .val()
    //   .trim();
    console.log("THIS!!!", this.value);
    console.log("user email!", userEmail);
    console.log("form submitted!");

    var userInfo = {
      userEmail: userEmail,
      userName: userName,
      userDate: userDate
      //,userTime: userTime //We need to get some unique property to identify which time button was clicked
    };
    if (userInfo.userEmail === "") {
      alert("enter valid email");
    } else {
      $.post("/email", userInfo);
    }
  });
});

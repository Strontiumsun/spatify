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
    console.log("user email!", userEmail);
    console.log("form submitted!");
    $.post("/email", { userEmail });
  });
});

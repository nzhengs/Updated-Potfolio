$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();

  $(".portfolio-link").click(function() {
    $(".about-me").hide();
    $(".portfolio").show();
  });
  $(".home").click(function() {
    $(".about-me").show();
    $(".portfolio").hide();
  });
  $(".project").click(function() {
    $(".about-me").hide();
    $(".portfolio").show();
  });
});

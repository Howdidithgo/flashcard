$(document).ready(function() {
  $(".card").click(function() {
    $(".back", this).toggle();
    $(".front", this).toggle();
  });
});

$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    const value = $(this).val();
    let charCount = (140 - value.length);
    $(this).siblings().children(".counter").text(charCount);
    if (charCount < 0) {
      $(this).siblings().children(".counter").css("color", "red");
    } else {
      $(this).siblings().children(".counter").css("color", "rgb(63, 61, 61)");
    }
  });
  // --- our code goes here ---
});
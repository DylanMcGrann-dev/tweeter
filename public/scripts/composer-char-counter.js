// this function counts the remaining charaters left in the text area starting at 140 
// if counts drops below 0 counter goes negative and turns red
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
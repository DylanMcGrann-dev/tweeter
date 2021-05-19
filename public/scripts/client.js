/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//updates the time based on how long ago the post was made
$(document).ready(function(){
  $("time.timeago").timeago();
});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){
  $("#one").hide();
  $("#two").hide();
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and preppends it to the tweets container
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
      $("time.timeago").timeago();
    };
  };
  // takes in a tweet object and is responsible for returning a tweet <article>
  const createTweetElement = function(object){
    const date = new Date(object.created_at);
    const userText = object.content.text;
    let $tweet = $(
      `<article class="tweet">
        <header class="tweet">
          <h3>
            <img src="${object.user.avatars}">${object.user.name}
          </h3>
          <h3 class="lastName">
            ${object.user.handle}
          </h3>
        </header>
        <div class="content">
          ${userText}
        </div>
        <footer class="tweet">
          <span class="Date tweet">
            <time class="timeago" datetime="${date.toISOString()}">
              ${date.toISOString()}
            </time>
          </span>
            <span class="tweet icon">
              <i class="fas fa-flag">
              </i>
              <i class="fas fa-retweet">
              </i>
              <i class="fas fa-heart">
              </i>
          </span>
        </footer>
      </article>`);
      $tweet.find('div.content').text(userText);
      return $tweet; 
    };
    // const $tweet = createTweetElement(tweetData);
    // renderTweets(tweetData);
    
    //prevents default form submission behaviour.
    //then sends a ajax post to /tweets
    $( "#target" ).submit(function( event ) {
      event.preventDefault();
      let value = $("#tweet-text").val();
      if (value.length < 1) {
        $("#one").slideDown("slow");
      } else if (value.length > 140) {
        $("#two").slideDown();
      } else if (value.length > 0 && value.length < 141) {
        $("#one").slideUp();
        $("#two").slideUp();
        $.ajax({
        method: "POST",
        url: "/tweets",
        data: $( this ).serialize()
      })
      .then(function() {
        $.getJSON('/tweets',function(result) {
          let newTweet = result.length - 1;
          let $tweet = createTweetElement(result[newTweet]);
          $('#tweets-container').prepend($tweet);
          $("time.timeago").timeago();
        });
        
      });
    }
    
  });
  //
  const loadTweets = function() {
    $.getJSON('/tweets',function(result) {
      renderTweets(result);
    });
  }
  loadTweets();
});


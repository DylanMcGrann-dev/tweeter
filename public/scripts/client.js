/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
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
    let $tweet = $(
      `<article class="tweet">
        <header class="tweet"><h3><img src="${object.user.avatars}">${object.user.name}</h3><h3 class="lastName">${object.user.handle}</h3></header>
          <div class="content">${object.content.text}</div>
        <footer class="tweet"><span class="Date tweet"><time class="timeago" datetime="${date.toISOString()}">${date.toISOString()}</time>
        </span><span class="tweet icon"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span></footer>
      </article>`);
    return $tweet; 
  };
  // const $tweet = createTweetElement(tweetData);
  // renderTweets(tweetData);

  //prevents default form submission behaviour.
  //then sends a ajax post to /tweets
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $( this ).serialize()
    })
    .then(function() {
      loadTweets();
    });
  });
  
  const loadTweets = function() {
    $.getJSON('/tweets',function(result) {
      console.log(result);
      renderTweets(result);
    });
  }
  loadTweets();
});


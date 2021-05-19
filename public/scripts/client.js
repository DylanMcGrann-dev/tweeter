/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function(){
  // $("time.timeago").timeago();
  const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
  ]
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
      $("time.timeago").timeago();
    };
  };
  // takes in a tweet object and is responsible for returning a tweet <article>
  const createTweetElement = function(object){
    const date = new Date(object.created_at);
    let $tweet = $(`<article class="tweet">
    <header class="tweet"><h3><img src="${object.user.avatars}">${object.user.name}</h3><h3 class="lastName">${object.user.handle}</h3></header>
    <div class="content">${object.content.text}</div>
    <footer class="tweet"><span class="Date tweet"><time class="timeago" datetime="${date.toISOString()}">${date.toISOString()}</time>
    </span><span class="tweet icon"><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span></footer>
    </article>`);
    return $tweet; 
  };
  // const $tweet = createTweetElement(tweetData);
renderTweets(tweetData);
  


});


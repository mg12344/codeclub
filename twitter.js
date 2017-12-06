let tweetsElement = document.getElementById("tweets");
let newTweetTextElement = document.getElementById("newTweetText");
let submitTweetButton = document.getElementById("submitTweet");

function addNewTweet(tweetHandle, tweetText) {
  let newHandleElement = document.createElement("p");
  newHandleElement.innerText = tweetHandle;
  newHandleElement.classList.add("handle")
  tweetsElement.appendChild(newHandleElement);

  let newTweetElement = document.createElement("p");
  newTweetElement.innerText = tweetText;
  tweetsElement.appendChild(newTweetElement);

}

submitTweetButton.onclick = function() {
  addNewTweet(newTweetTextElement.value);
};

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('6292c26f9121cab49fea', {
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  addNewTweet(data.name, data.message);
});

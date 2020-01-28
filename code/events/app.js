// Our JS file for the Events Project.
console.log('Hello from JS!');
/*
  What events are there?
  - Mouse (click*, mouse*)
  - Keyboard (key* Down, Pressed, Up)
  - Browser (resize, scroll)
  - Form (submit)
  Events Need:
    1. An Event Type        ("CLICK")
    2. An Event Target      ("BUTTON")
    3. A Callback Function
    When all of these things are combined,
    they become an event listener.
*/
// The type of the event
const eventType = 'click';
// The target of the event
const myButton = document.querySelector('button');
// The callback - what do you want to
//                do as a response?
const myCallback = function(event) {
  console.log('The button was clicked!', event);
}
// Create an Event Listener
// WHEN this EVENT takes place on this TARGET,
// call this CALLBACK Function.
myButton.addEventListener('click', myCallback);
// Type + Target + Callback + Event Listener
const darkButton = document.querySelector('#dark');
const changeToDarkTheme = function() {
  console.log('Night time!');
  document.querySelector('body').setAttribute('class', 'dark');
}
darkButton.addEventListener('click', changeToDarkTheme);
const lightButton = document.querySelector('#light');
const changeToLightTheme = function() {
  console.log('Day time!');
  document.querySelector('body').setAttribute('class', 'light');
}
lightButton.addEventListener('click', changeToLightTheme);
const postTweetButton = document.querySelector('.post');
const createTweet = function() {
  console.log('making a tweet...');
  // Get whatever is typed in the input
  // and save it in a variable called
  // content.
  const input = document.querySelector('input');
  const content = input.value;
  // Create a new paragraph
  const newParagraph = document.createElement('p');
  newParagraph.innerText = content;
  // Take the paragraph and put it at the end
  // of div.new-tweets
  const newTweetsDiv = document.querySelector('.new-tweets');
  newTweetsDiv.appendChild(newParagraph);
  input.value = '';
}
postTweetButton.addEventListener('click', createTweet);
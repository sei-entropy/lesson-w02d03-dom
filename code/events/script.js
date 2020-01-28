// Our file for the events projects

console.log("Hello from JS!");

/* 
What events are there? 


- Mouse (Click*, mouse*, )
- Keyboard (key* Down Pressed, up)
- Browser (resize, scroll)
- Form (submit) 

Events Need: 

1. An Event Type ("Click")
2. An Event Target ("Button")
3. A call back function 

When all of these things combined, 
they become an event listener.
*/

// Type of the event
const eventType = "click";

//the target of the event
const myButton = document.querySelector("button");

// The callback - what do you wnat to do as a response ?

const myCallback = function(event) {
  console.log("The button was clicked");
};

// Create an Event Listener

// When this EVENT takes place on this TARGET,
// Call this CALLBACK Function

myButton.addEventListener(eventType, myCallback, event);

// Type + Target + Callback + Event Listner

const darkButton = document.querySelector("#dark");

const changeToDarkThem = function() {
  console.log("night time");
  document.querySelector("body").setAttribute("class", "dark");
};

darkButton.addEventListener("click", changeToDarkThem);

const lightButton = document.querySelector("#light");

const changeToLightThem = function() {
  console.log("day Time");
  document.querySelector("body").setAttribute("class", "light");
};

lightButton.addEventListener("click", changeToLightThem);

/////

const postTweetButton = document.querySelector(".post");

const createTweet = function() {
  console.log("making a tweet...");

  // get whatever is typed in the input
  // and save it in a variable called
  // content

  const input = document.querySelector("input");
  const content = input.value;

  //create a new paragraph
  const newParagraph = document.createElement("p");
  newParagraph.innerText = content;

  // Take the paragraph and put it at the end
  // of div.new-tweets

  const newTweetDiv = document.querySelector(".new-Tweets");

  newTweetDiv.appendChild(newParagraph);

  input.value = "";
};

postTweetButton.addEventListener("click", createTweet);

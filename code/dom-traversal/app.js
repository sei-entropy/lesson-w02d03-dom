console.log('It works!!');
// // Select the H1
// const heading = document.querySelector('h1');
// console.log(heading);
// // Select the paragraph
// const paragraph = document.querySelector('p');
// console.log(paragraph);
// // Select the img with a class selector
// const image = document.querySelector('.bill');
// console.log(image);
// // Select the 1st & 2nd list items
// const firstListItem = document.querySelector('li');
// const secondListItem = document.querySelector('li#second');
// console.log(firstListItem, secondListItem);
// Select all list items from a UL
// const allListItems = document.querySelectorAll('li');
// console.log(allListItems);
// console.log('Starting loop...');
// for(let i = 0; i < allListItems.length; i++) {
//   const currentListItem = allListItems[i];
//   console.log(currentListItem);
// }
// console.log('Ending loop...');
// elm.getAttribute('ATTRIBUTE NAME');
// const img = document.querySelector('.bill');
// const src = img.getAttribute('src');
// const alt = img.getAttribute('alt');
// console.log(src, alt);
// // console.log( document.querySelector('.bill').getAttribute('src') );
// // Find the `a` tag, and log out the `href` attribute
// const aTag = document.querySelector('a');
// const href = aTag.getAttribute('href');
// console.log(href);
// elm.setAttribute('ATTRIBUTE NAME', 'DESIRED VALUE');
// const img = document.querySelector('img');
// const oldSrc = img.getAttribute('src');
// img.setAttribute('src', 'https://www.placecage.com/400/400');
// // Find the `a` tag and
// const aTag = document.querySelector('a');
// // change the `href` to https://duckduckgo.com
// aTag.setAttribute('href', 'https://duckduckgo.com');
// // Print the new href
// const newHref = aTag.getAttribute('href');
// console.log(newHref);
// // Try setting the target attribute to be `_blank`
// aTag.setAttribute('target', '_blank');
// // Find the h1
// const heading = document.querySelector('h1');
// // Print the current text of h1
// console.log(heading.innerText);
// // Change h1 text to "Changed by JS"
// heading.innerText = "Changed by JS";
// const input = document.querySelector('input');
// console.log(input.value);
// input.value = 'SEI';
// // This is only for form-related data

// //styles changing
// heading.style.color = 'hotpink';
// heading.style.fontSize = '120px';
// heading.style.background = 'green';

// console.log('Hesging Width:', heading.style.width);



/*
*/

const newHeading = document.createElement('h1');
newHeading.innerText = 'Created by JavaScript!';

const targetDiv = document.querySelector('.dynamic');
targetDiv.appendChild(newHeading);

const aTag = document.querySelector('a');
targetDiv.appendChild(aTag);


//Make
const newImg = document.createElement('img');

//Chang
newImg.setAttribute('src', 'https://www.placecage.com/300/300');
newImg.style.border = '4px dashed purple';


//Add to Page
document.querySelector('body').appendChild(newImg);
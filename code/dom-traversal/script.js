// // This is my js file

// console.log("test 321");

// // // select the h1
// // const heading = document.querySelector("h1");
// // console.log(heading);

// // //select the paragraph
// // const paragraph = document.querySelector("p");
// // console.log(paragraph);

// // //select the img with a class selector
// // const image = document.querySelector(".bill");
// // console.log(image);

// // //select the 1st & 2nd items from the list
// // const firstListItem = document.querySelector("li");
// // const secondListItem = document.querySelector("li#second");
// // console.log(firstListItem, secondListItem);

// //select all list items from ul
// // const allListItem = document.querySelectorAll("li");

// // console.log(allListItem);

// // console.log("Starting loop...");

// // for (let i = 0; i < allListItem.length; i++) {
// //   const currentListItems = allListItem[i];

// //   console.log(currentListItems);
// // }

// // console.log("Ending loop...");

// // // elm.getAttribute(ATTRIBUTE NAME);

// // const img = document.querySelector("img");

// // const srcImg = img.getAttribute("src");
// // const altImg = img.getAttribute("alt");

// // console.log(srcImg, altImg);

// // console.log(document.querySelector(".bill").getAttribute("src"));

// // console.log(document.querySelector(".bill").getAttribute("alt"));

// // //Find the 'a' tag and log out the 'href' attribute

// // const aTag = document.querySelector("a");
// // const href = aTag.getAttribute("href");

// // console.log(href);

// //elm.setAttribute('ATTRIBUTE NAME','DESIRED VALUE')

// const img = document.querySelector("img");

// const oldSrc = img.getAttribute("src");

// img.setAttribute("src", "https://www.placecage.com/400/400");

// // Find the 'a' tag to https/duckduckgo.com

// const aTag = document.querySelector("a");

// const href = aTag.getAttribute("href");

// aTag.setAttribute("href", "https://duckduckgo.com/");

// // Print the new href

// const newHref = aTag.getAttribute("href");

// console.log(newHref);

// //Try setting the target attribute to be '_blank'

// aTag.setAttribute("target", "_blank");

// //// labv 1

// const logoImg = document.querySelector('#hplogo');

// const src = logoImg.getAttribute('src');

// const srcset = logoImg.getAttribute('srcset');

// logoImg.setAttribute('src', 'https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg')

// logoImg.setAttribute('srcset', 'https://amp.businessinsider.com/images/4fd8dcb7eab8eab648000004-750-143.jpg')

// Find the h1

const heading = document.querySelector("h1");


// print the current test of h1 

console.log(heading.innerText)

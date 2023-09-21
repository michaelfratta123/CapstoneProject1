// include a save for later link for each item in index.html

// declare an empty array to hold all the saved links
const savedForLater = [];

// declare a function to format the card ID (name of drum component) taken from index.html
const formatCardId = (cardId) => {
  // this regex is splitting the word on th first capital letter
  let words = cardId.split(/(?=[A-Z])/).join(" ");
  // then capitalise the first letter of the word too
  return words.charAt(0).toUpperCase() + words.slice(1);
};

// define a function called displayLinks to display the saved links in the page
const displayLinks = (savedForLater) => {
  // get a reference to savedLinks ul located in saved.html
  let savedLinks = document.getElementById("savedLinks");
  // Check if savedLinks is found
  if (savedLinks) {
    // reset the contents if o
    savedLinks.innerHTML = "";
    // check that savedForLater is not an empty array
    if (savedForLater) {
      savedForLater.forEach((link) => {
        // create a new list elment
        let li = document.createElement("li");
        // give the list element the relevant bootstrap class name for styling
        li.className = "list-group-item";
        // create an anchor element to hold the link
        let a = document.createElement("a");
        // use template literals to create a link to the card in index.html dynamically
        a.href = `index.html#${link.id}`;
        // use the formatCardId function to create a label for the anchor element
        a.innerText = formatCardId(link.id);
        // append list and anchor element to savedLinks
        savedLinks.appendChild(li).appendChild(a);
      });
    }
  }
};

// create a function named addLink to add the link to local storage
const addLink = (item) => {
  // get the existing saved items from local storage
  let savedForLater = JSON.parse(localStorage.getItem("savedForLater")) || [];
  // add the new item to the list of saved items, if it is not already there
  if (!savedForLater.some((e) => e.id === item)) {
    savedForLater.push({ id: item });
    // update local storage with the updated list of saved items
    localStorage.setItem("savedForLater", JSON.stringify(savedForLater));
    // alert the user with how many items are saved (to meet requirements)
    setTimeout(() => {
      savedForLater = JSON.parse(localStorage.getItem("savedForLater"));
      alert(
        `You have saved ${savedForLater.length} ${
          savedForLater.length > 1 ? "links" : "link"
        } for later!`
      );
    }, 100); // delay alert by 100 milliseconds for better performance
  } else {
    // otherwise tell user they've already saved the item
    alert("You have already saved this item!");
  }
};

// create a function called checkStorage to check for the DOM content to have loaded for better performance
const checkStorage = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // get saved items from local storage
    let savedItems = JSON.parse(localStorage.getItem("savedForLater")) || [];
    displayLinks(savedItems); // display saved items on page
  });
};

checkStorage(); // run the above function

// include a like button to fulfil the requirements

// define a function named like
const like = () => {
  let button = document.querySelector(".heart-button"); // get the button from the DOM
  button.classList.toggle("liked"); // toggle "liked"
  // initialise a variable to hold a boolean for whether th button class contains a "liked"
  let isLiked = button.classList.contains("liked");
  localStorage.setItem("isLiked", isLiked); // set this to local storage if it does
  // if it is not liked
  if (!isLiked) {
    localStorage.removeItem("isLiked"); // remove it from local storage
  }
};

// define a function named checkLocalStorage, to act as the 'DOM content loaded'
const checkLocalStorage = () => {
  let button = document.querySelector(".heart-button"); // get the button from the DOM
  let isLiked = localStorage.getItem("isLiked"); // if "isLiked" exists in local storage
  if (isLiked) {
    button.classList.add("liked"); // add "liked" to the button class
  }
};

checkLocalStorage(); // run the above function

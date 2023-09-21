// declare a function named submitComment to submit a comment
const submitComment = () => {
  // get the inputComment value from contact.html
  const commentText = document.getElementById("inputComment").value;
  // if anything has been input
  if (commentText) {
    // set the comment to local storage
    localStorage.setItem("comment", commentText);
    // display the comment
    displayComment();
    // clear the comment input field
    document.getElementById("inputComment").value = "";
    return false; // prevent form submission if comment (so page dosn't skip up)
  } else {
    // otherwise alert the user a comment is required
    alert("Please input a comment!");
  }
  return false; // prevent form submission if no comment (so page dosn't skip up)
};

// declare a function to display the comment
const displayComment = () => {
  // get a reference to the div with id "commentDisplay" from contact.html
  const commentDisplay = document.getElementById("commentDisplay");
  // get the comment from local storage
  const comment = localStorage.getItem("comment");
  if (comment) {
    // display the comment if it exists
    commentDisplay.innerText = `Your comment: ${comment}`;
  }
};

// check for DOM content to have loaded for better performance
document.addEventListener("DOMContentLoaded", () => {
  displayComment();
});

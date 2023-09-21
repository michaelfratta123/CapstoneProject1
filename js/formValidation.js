/* Example of form validation taken from: https://www.w3schools.com/js/js_validation.asp 
   Example of email validation taken from: https://www.w3resource.com/javascript/form/email-validation.php

   On submit, if the email address and/or message fields are blank - alert the user.
   Also check if email is valid. */

function validateForm() {
  // declare variable to hold contents of email address input in form
  let emailAddress = document.forms["contactForm"]["inputEmail"].value;
  // declare variable to hold contents of message input in form
  let message = document.forms["contactForm"]["inputMessage"].value;
  // declare variable to hold contents of whether reply needed was selected in form
  let replyNeeded = document.forms["contactForm"]["reply"].value;
  // if email address is empty, alert user it should be filled in
  if (!emailAddress) {
    alert("Email address must be filled out!");
    // returning false so that empty action in html doesn't lead user to a broken page
    return false;
    // if email address is invalid, alert user of such
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress) === false
  ) {
    alert("Not a valid email address!");
    return false;
    // if message is empty, alert user it needs filling out
  } else if (!message) {
    alert("Message must be filled out!");
    return false;
    // if reply is needed, inform user I'll get back in touch
  } else if (replyNeeded === "yesReply") {
    alert("Thanks for your message - I'll get back to you asap!");
    return false;
    // if reply is not needed, just thank user for the message
  } else if (replyNeeded === "noReply") {
    alert("Thanks for your message!");
    return false;
  }
}

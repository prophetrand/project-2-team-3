$(document).ready(function() {
  var signMeUp = $("form.signup");
  var userInput = $("input#user-input");
  var passInput = $("input#pass-input");


  signMeUp.on("submit", function(event) {
    event.preventDefault();
    var userObject = {
        username: userInput.val().trim(),
        password: passInput.val().trim()
    }; 

    if (!userObject.username || !userObject.password) {
        return;
    }

    // client-side console.logs for testing
    console.log("Successful entry!");
    console.log("Name: " + userObject.username + ", Pass: " + userObject.password);
  });
});


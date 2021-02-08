$(document).ready(function() {
  var logMeIn = $("form.login");
  var userInput = $("input#user-input");
  var passInput = $("input#pass-input");


  logMeIn.on("submit", function(event) {
    event.preventDefault();
    var userObject = {
        username: userInput.val().trim(),
        password: passInput.val().trim()
    };

    if (!userObject.username || !userObject.password) {
        return;
    }

    // loginNow(userObject.username, userObject.password);
    userInput.val("");
    passInput.val("");
    // client-side console.logs for testing
    console.log("Successful entry!");
    console.log("Name: " + userObject.username + ", Pass: " + userObject.password);
  });


});
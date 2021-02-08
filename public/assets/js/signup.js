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

    signUpNow(userObject.username, userObject.password);
    userInput.val("");
    passInput.val("");
    // client-side console.logs for testing
    console.log("Successful entry!");
    console.log("Name: " + userObject.username + ", Pass: " + userObject.password);
  });

  function signUpNow(name, pass) {
    $.post("/api/signup", {
      username: name,
      password: pass
    })
      .then(function(data){
        // window.location.replace("/profile");
      })
      .catch(function(err) {
        console.log("ERROR! ERROR!");
        throw err;
      });
  }
});


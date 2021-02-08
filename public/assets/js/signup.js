$(document).ready(function() {
  var signMeUp = $("form.signup");
  var userInput = $("input#user-input");
  var passInput = $("input#pass-input");
  var bioInput = $("input#bio-input");

  signMeUp.on("submit", function(event) {
    event.preventDefault();
    var userObject = {
        username: userInput.val().trim(),
        password: passInput.val().trim(),
        bio: bioInput.val().trim()
    }; 

    if (!userObject.username || !userObject.password) {
        return;
    }

    signupNow(userObject.username, userObject.password, userObject.bio);
    userInput.val("");
    passInput.val("");
    bioInput.val("");
    // client-side console.logs for testing
    console.log("Successful entry!");
    console.log("Name: " + userObject.username + ", Pass: " + userObject.password + ", Bio: " + userObject.bio);
  });

  function signupNow(name, pass, bio) {
    $.post("/api/signup", {
      username: name,
      password: pass,
      bio: bio
      // interests: ints
    })
      .then(function(data){
        console.log("Next step in promise...");
        console.log("Checking data from promise", data);
        // window.location.replace("/profile");
      })
      .catch(function(err) {
        console.log("ERROR! ERROR!");
        throw err;
      });
  }
});


$(document).ready(function() {
  var signMeUp = $("form.signup");
  var userInput = $("input#user-input");
  var passInput = $("input#pass-input");
  var bioInput = $("input#bio-input");
  var arts = $("#arts1").is(":checked");
  var food = $("#food2").is(":checked");
  var nature = $("#nature3").is(":checked");
  var sports = $("#sports4").is(":checked");
  var tech = $("#tech5").is(":checked");
  var travel = $("#travel6").is(":checked");


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
    console.log("Name: " + userObject.username + ", Bio: " + userObject.bio);

    // newInterests();
  });

  function signupNow(name, pass, bio) {
    $.post("/api/signup", {
      username: name,
      password: pass,
      bio: bio
    })
      .then(function(data){
        // console.log("Next step in promise...");
        // console.log("Checking data from promise", data);
        window.location.replace("/profile");
      })
      .catch(function(err) {
        console.log("ERROR! ERROR!");
        throw err;
      });
  }

  function newInterests() {
    if (arts) {
      
    }

    if (food) {
      
    }

    if (nature) {

    }

    if (sports) {

    }

    if (tech) {

    }

    if (travel) {

    }
  }
});


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
  });

  function signupNow(name, pass, bio) {
    $.post("/api/signup", {
      username: name,
      password: pass,
      bio: bio
    })
      .then(function(){
        var arts = $("#arts1").is(":checked");
        var food = $("#food2").is(":checked");
        var nature = $("#nature3").is(":checked");
        var sports = $("#sports4").is(":checked");
        var tech = $("#tech5").is(":checked");
        var travel = $("#travel6").is(":checked");
        if (arts) {
          newInterest(1);
        }
        if (food) {
          newInterest(2);
        }
        if (nature) {
          newInterest(3);
        }
        if (sports) {
          newInterest(4);
        }
        if (tech) {
          newInterest(5);
        }
        if (travel) {
          newInterest(6);
        }
      })
      .then(function() {
        setTimeout(() => {
          window.location.replace("/profile");
        }, 1000);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  function newInterest(num) {
    $.post("/api/interests", {
      interest_id: num
    }).catch(function(err){
      console.log(err);
    });
  }
});


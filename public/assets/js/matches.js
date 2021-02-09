


$(document).ready(function() {
    
    // $.get("/api/veiws/layouts/matches.handlebars").then(function(data) {
     
    // });
    
    $.get("/api/user_data").then(function(data) {
      $(".matches-name").text(data.email);
    });
    
  });































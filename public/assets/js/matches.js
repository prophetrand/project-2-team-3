


$(document).ready(function() {
    
    $.get("/api/veiws/layouts/matches.handlebars").then(function(data) {
      $(".matches-id").text(data);
    });
    $(function() {
      $(".matches-id").on("click", function(event) {
        var id = $(this).data("id");
      });
    })
    
      
  });































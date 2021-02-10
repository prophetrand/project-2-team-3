


$(document).ready(function() {
    
    $.get("/api/matches").then(function(data) {
      $(".matches-id").text(data);
    });
    // $(function() {
    //   $(".matches-id").on("click", function(event) {
    //     var id = $(this).data("id");
    //   });
    // })

    // var matches_id = $(this).childern(".matches_id").val();
    // $.ajax({
    //   method: "PUT",
    //   url: ""
    // }).then(function(data) {
    //   location.reload();
    // });
    
      
  });































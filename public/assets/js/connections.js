$(document).ready(function() {
    $('.btn').on("click", function() {
        var connect = $(this).data('id');
        
        $.post("/api/connect", {
            match_id: connect
        }).then(data => {
            window.location.replace("/profile");
        });
    });
});
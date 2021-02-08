$(document).ready(function() {
    var interest = $(".interest");

    interest.on("click", function() {
        var choice = this.getAttribute('data-choice');
        console.log(choice);
        $(".content").html("");
    });

});
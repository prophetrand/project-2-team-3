$(document).ready(function() {
    var interest = $(".interest");

    interest.on("click", function() {
        var choice = this.getAttribute('data-choice');
        // console.log(choice);
        $(".content").hide();

        sendInterest(choice);
    });

});

function sendInterest(choice) {
    window.location.replace("/api/user/find/" + choice);
}
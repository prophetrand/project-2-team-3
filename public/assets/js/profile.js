var loadFile = function (event) {
    var image = $('#profilePic');
    image.src = URL.createObjectURL(event.target.files[0]);
    $.update('/api/user', image.src);
};

$(document).ready(function () {
//     $(document).on("click", "#editBtn", editProfile);

//     function editProfile() {
//         var currentProfile = $(this).data()
//     }
//     function updateProfile() {
//         $.ajax({
//             method: "PUT",
//             url: "/api/user",
//             data: 
//         }).then(getTodos);
//     }

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(username) {
    $.post("api/username", {
        username: username
    })
        .then(function () {
            window.location.replace("/profile");
            // If there's an error, log the error
        })
        .catch(function (err) {
            console.log(err);
        });
}
});




// $(document).ready(function(event) {
// var uploadImage = $("#profilePic");
// image.src = URL.createObjectURL(event.target.files[0]);
// });

// Edit Button
// $("#editBtn").on("click", function (event) {
//     event.preventDefault();
//     editProfile(event);

// });



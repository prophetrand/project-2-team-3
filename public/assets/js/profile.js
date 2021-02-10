// var loadFile = function (event) {
//     var image = $('#profilePic');
//     image.src = URL.createObjectURL(event.target.files[0]);
//     $.update('/api/user', image.src);
// };

// Edit button
// Save changes button
// saving image to page
// editing interests
// appending interests





$(document).ready(function () {

    function editProfile(event) {
        // var currentProfile = $(this).data()
        console.log("edit profile" + JSON.stringify(event));
        
    }

    // Edit Button
    $("#saveBtn").on("click", function (event) {
        event.preventDefault();
        const updateProf = {
            bio: $("#newBio").val(),
            // profPic: $("#picUpload").val(),
        }
        const id = event.target.getAttribute("data-id");
        console.log(id);
        fetch(`/api/user/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(updateProf),
        }).then((response) => {
                console.log(response);
                location.reload('/profile');
        });
        // editProfile(event);
        // console.log("editProf" + JSON.stringify(event));
    });
});

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
// function loginUser(username) {
//     $.post("api/username", {
//         username: username
//     })
//         .then(function () {
//             window.location.replace("/profile");
//             // If there's an error, log the error
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }
// });
// loginUser();



// $(document).ready(function(event) {
// var uploadImage = $("#profilePic");
// image.src = URL.createObjectURL(event.target.files[0]);
// });
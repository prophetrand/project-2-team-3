$(document).ready(function () {

    // function editProfile(event) {
    //     // var currentProfile = $(this).data()
    //     console.log("edit profile" + JSON.stringify(event));
        
    // }

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
    });
});

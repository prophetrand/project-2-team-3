$(document).ready(function () {

    // Edit Button
    $("#saveBtn").on("click", function (event) {
        event.preventDefault();
        const updateProf = {
            bio: $("#newBio").val(),
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

var loadFile = function (event) {
    var image = $('#profilePic');
    image.src = URL.createObjectURL(event.target.files[0]);
    $.update('/api/user', image.src);
};



// $("input[type='image']").click(function() {
//     $("input[id='profilePic']").focus().click();
// });


// $(document).ready(function(event) {
// var uploadImage = $("#profilePic");
// image.src = URL.createObjectURL(event.target.files[0]);
// });


// Editing Profile
// function editProfile(event) {
// (`
//     <div class="modal" id="myModal" tabindex="-1">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title">Modal title</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
            
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//         </div>
//     </div>
// </div>
    
//     `)
// }



// Edit Button
// $("#editBtn").on("click", function (event) {
//     event.preventDefault();
//     editProfile(event);

// });

// var myModal = $('myModal')
// var myInput = $('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//     myInput.focus()
// })


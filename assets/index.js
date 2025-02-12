function openSesame(){
    let letter = document.querySelector(".letterBody");
    let lid = document.getElementById("letter_lid");
    let text = document.getElementById("valentine_text");
    let instruction = document.getElementById("instruction");
    let fingerPointer = document.getElementById("finger_pointer");
    let imageContainer = document.getElementById("image_container");
    let photoGallery = document.getElementById("photo_gallery");

    letter.classList.add("opened");


    setTimeout(() => {
        letter.classList.add("disappeared");

        setTimeout(() =>{
            letter.style.display = "none";
            text.style.opacity = "1";
            text.style.transform = "scale(1)";
            instruction.innerText = "";
            fingerPointer.innerText = "";

            imageContainer.style.opacity = "1";
            imageContainer.style.transform = "scale(1)";
            
            photoGallery.style.opacity = "1";
            photoGallery.style.transform = "scale(1)";
        }, 1000);
    },500);
}
// Open Modal and Show Image
function openModal(image) {
    let modal = document.getElementById("zoomModal");
    let modalImg = document.getElementById("modalImg");
    let modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";  // Show modal
    modalImg.src = image.src;  // Set clicked image as modal content
    modalCaption.innerText = image.alt;  // Display image description as caption
}


// Close Modal
function closeModal() {
    document.getElementById("zoomModal").style.display = "none";
}

// Close modal when clicking outside the image
document.getElementById("zoomModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});


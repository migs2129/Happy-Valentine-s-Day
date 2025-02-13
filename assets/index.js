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

            // Calling Animation
            createFallingElements();
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
    createFallingElements();
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

// Function for animation of flowers and hearts
function createFallingElements() {
    for (let i = 0; i < 20; i++) {  // Adjust number of elements
        let element = document.createElement("div");
        element.classList.add("falling");
        element.innerHTML = Math.random() > 0.5 ? "🌸" : "❤️"; // Randomly choose hearts or flowers
        document.body.appendChild(element);
        
        element.style.left = Math.random() * window.innerWidth + "px"; // Random X position
        element.style.animationDuration = (Math.random() * 2 + 2) + "s"; // Vary animation speed
        element.style.fontSize = (Math.random() * 20 + 20) + "px"; // Random size

        // Remove after animation ends
        setTimeout(() => {
            element.remove();
        }, 3000);
    }
}

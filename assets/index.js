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
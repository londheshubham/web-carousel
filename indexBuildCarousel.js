const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

document.getElementById("carousel-button-next").addEventListener("click",moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click',moveToPreviousSlide)

function hideAllSlides() {
    for (const slide of slides){
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }

}


function moveToNextSlide() {
    // co nsole.log("moving to the next")
    hideAllSlides()
    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    }
    else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")

}

function moveToPreviousSlide() {
    // console.log("moving to the previous")
    hideAllSlides()
    if (slidePosition === 0){
        slidePosition = totalSlides -1
    }
    else{
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")

}


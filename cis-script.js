//get element html
//container for all image
const carouselSlide = document.querySelector('.crousel-slide');

const carouselImage = document.querySelectorAll('.crousel-slide img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;//state curent index
const totalImage = carouselImage.length; 

let autoSlideInterval; //variabel to save interval for auto slide

function updateCarousel(){
    carouselSlide.style.transform = `translateX(${-currentIndex * 100 }%)`;

    //update indikator active
    indicators.forEach((indicators, index) => {
        indicators.classList.toggle('active', index === currentIndex);
    })
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % totalImage;
    updateCarousel();
    resetAutoSlide();
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + totalImage) % totalImage;
    updateCarousel();
    resetAutoSlide();
}

function resetAutoSlide(){
    clearInterval(autoSlideInterval);

    autoSlideInterval = setInterval(nextSlide, 5000);

}


//addeventlistener for next
nextBtn.addEventListener('click', nextSlide);

//addeventlistener for prev
prevBtn.addEventListener('click', prevSlide);

//addeventlistener for indicator
indicators.forEach((indicators, index) => {
indicators.addEventListener('click', () =>{
    currentIndex = index;
    updateCarousel();
    resetAutoSlide();
})
})
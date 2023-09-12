document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    function showImage(index) {
        const imageWidth = carousel.querySelector("img").clientWidth;
        carousel.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + 5) % 5; // 5 is the number of images
        showImage(currentIndex);
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % 5;
        showImage(currentIndex);
    });

    showImage(currentIndex);
});
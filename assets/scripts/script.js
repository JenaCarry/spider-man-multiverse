function handleMouseEnter() {
    this.classList.add("s-card--hovered");
    document.body.id = `${this.id}--hovered`;
}

function handleMouseLeave() {
    this.classList.remove("s-card--hovered");
    document.body.id = "";
}

function addEventListenersToCards() {
    const cardElements = document.querySelectorAll(".s-card");
    cardElements.forEach((cardElement) => {
        cardElement.addEventListener("mouseenter", handleMouseEnter);
    });

    cardElements.forEach((cardElement) => {
        cardElement.addEventListener("mouseleave", handleMouseLeave);
    });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards);

function selectCarouselItem(selectedButtonElement) {
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector(".s-cards-carousel");
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;
    const activeButtonElement = document.querySelector(
        ".s-controller__button--active"
    );
    activeButtonElement.classList.remove("s-controller__button--active");
    selectedButtonElement.classList.add("s-controller__button--active");
}

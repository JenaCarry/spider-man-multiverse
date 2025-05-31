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

// Drag Functionality
const card = document.getElementById("draggableCard");
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
 
card.addEventListener("mousedown", startDragging);
card.addEventListener("touchstart", startDragging, { passive: false });
 
function startDragging(e) {
    initialX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    initialY = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
 
    isDragging = true;
    card.classList.add("dragging");
 
    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag, { passive: false });
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchend", stopDragging);
}
 
function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
        currentY = e.type.includes("mouse") ? e.clientY : e.touches[0].clientY;
 
        xOffset = currentX - initialX;
        yOffset = currentY - initialY;
 
        // Keep card within viewport bounds
        const rect = card.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;
 
        xOffset = Math.max(0, Math.min(xOffset, maxX));
        yOffset = Math.max(0, Math.min(yOffset, maxY));
 
card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    }
}
 
function stopDragging() {
    isDragging = false;
    card.classList.remove("dragging");
    initialX = currentX;
    initialY = currentY;
 
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchend", stopDragging);
}
 
// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll(".content section").forEach(section => {
section.style.display = "none";
        section.classList.remove("active");
    });
    const targetSection = document.getElementById(sectionId);
targetSection.style.display = "block";
    targetSection.classList.add("active");
}
 
// Quote Toggle
function showQuote() {
    const quote = document.getElementById("quote");
quote.style.display = quote.style.display === "none" ? "block" : "none";
}
const bus = document.querySelector(".intro img");

// 1) Adjust headline image brightness while hovering
bus.addEventListener("mouseenter", () => {
    bus.style.filter = "brightness(110%)";
});

bus.addEventListener("mouseleave", () => {
    bus.style.filter = "brightness(100%)";
});

// 2) Decrease headline image size after double clicking
bus.addEventListener("dblclick", () => {
    bus.style.transform = "scale(0.85)";
    bus.style.backgroundColor = "black";
});

const logo = document.querySelector(".logo-heading");

// 3) Change logo, logo background color, and font size after clicking
logo.addEventListener("click", () => {
    logo.style.color = "red";
    logo.style.fontWeight = "900";
    logo.style.backgroundColor = "aqua";
});

// 4) Underline text as you hover cursor over it 
document.querySelectorAll("p").forEach(p => {
    p.addEventListener("mouseenter", () => {
    p.style.textDecoration = "underline";
})});

// 5) Display an alert if any of the text is copied
document.querySelectorAll("p").forEach(text => {
    text.addEventListener("copy", () => {
    alert("Please don't copy text!");
})});

const intro = document.querySelector("body .intro");

// 6) Give intro section a background if double clicked
document.addEventListener("dblclick", () => {
    intro.style.backgroundColor = "aqua";
})

// Top section has lower opacity initially
intro.style.opacity = "0.1";

// 7) Upon page loading, the top section's opacity increases to 3 and there's a 2 second transition
window.addEventListener("load", () => {
    intro.style.opacity = "3";
    intro.style.setProperty("transition", "opacity 2s ease-in");
})

const content = document.querySelector(".content-section");

// 8) Upon scrolling, the second section ("Let's Go!") fades in using the same opacity/transition properties
window.addEventListener("scroll", () => {
    content.style.opacity = "1";
    content.style.setProperty("transition", "opacity 2s ease-in");
});

// 9) The second section initially loads with a low opacity (faded)
window.addEventListener("load", () => {
    content.style.opacity = "0.1";
});

// 10a) Alert user if window is resized :)
window.addEventListener("resize", () => {
    alert("Resize all you want! This site is responsive!");
});

// 10b) Alert if any key is pressed
window.addEventListener("keydown", () => {
    alert("You pressed a key!");
});

// 10c) Alert user if the context menu is opened
window.addEventListener("contextmenu", () => {
    alert("You're opening the context menu!");
});

const testing = document.querySelector("body");

document.addEventListener("click", () => {
    testing.style.backgroundColor = "ghostwhite";
});

const footer = document.querySelector("footer");

document.addEventListener("click", () => {
    footer.style.backgroundColor = "aqua";
    footer.stopPropagation();
});

const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
});

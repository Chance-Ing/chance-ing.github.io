const roles = [
    "Cybersecurity Student.",
    "IT Professional.",
    "AI/ML Developer."
];

const typeWriterElement = document.getElementById("typewriter");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typeWriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500;
    }

    setTimeout(typeWriter, typingDelay);
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    document.getElementById("year").textContent = new Date().getFullYear();
});
document.addEventListener("DOMContentLoaded", function() {
    const text = "Plexi is under development, thank you for visiting us. We are on our way to make Plexi even better than ever. Hope to see you soon.";
    const typingSpeed = 50; // Adjust typing speed (milliseconds per character)
    const element = document.getElementById('loading-message');
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            // Optional: Blink caret after typing is complete
            element.classList.add('blinking-caret');
        }
    }
    
    type();
});

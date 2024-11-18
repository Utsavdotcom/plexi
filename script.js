document.addEventListener("DOMContentLoaded", function() {
    const text = "Plexi is under development, thank you for visiting us. We are on our way to make Plexi even better than ever. Hope to see you soon.";
    const typingSpeed = 50;
    const element = document.getElementById('loading-message');
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            element.classList.add('blinking-caret');
        }
    }
    
    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        menu.classList.toggle('show');
    });
});


document.querySelectorAll('.has-dropdown > a').forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
        event.preventDefault();

        const dropdown = menuItem.nextElementSibling;


        dropdown.classList.toggle('show');

        document.querySelectorAll('.dropdown').forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('show');
            }
        });
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.has-dropdown')) {
        document.querySelectorAll('.dropdown').forEach((dropdown) => {
            dropdown.classList.remove('show');
        });
    }
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
    setTimeout(() => {
      document.getElementById('thank-you-message').style.display = 'none';
    }, 3000);
  });
  
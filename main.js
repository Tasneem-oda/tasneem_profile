// Smooth scrolling function
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('a'); // Adjust the selector to match your links

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.href;
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the duration in CSS
        });
    });
});

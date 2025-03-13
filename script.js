document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition > sectionTop - window.innerHeight / 1.5 && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});

const words = document.querySelectorAll('.container__floatingword');

words.forEach(word => {
    animateWord(word);
});

function animateWord(word) {
    const container = document.querySelector('.container');
    const maxX = container.offsetWidth - word.offsetWidth;
    const maxY = container.offsetHeight - word.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    const animationSpeedX = (Math.random() + 0.5); // Adjusted for half speed
    const animationSpeedY = (Math.random() + 0.5); // Adjusted for half speed

    const animate = () => {
        x += animationSpeedX;
        y += animationSpeedY;

        if (x < -word.offsetWidth) {
            x = maxX;
        }

        if (x > maxX) {
            x = -word.offsetWidth;
        }

        if (y < -word.offsetHeight) {
            y = maxY;
        }

        if (y > maxY) {
            y = -word.offsetHeight;
        }

        word.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(animate);
    };

    animate();
}
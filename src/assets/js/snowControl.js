let isSnowing = true;
const snowButton = document.querySelector('.nav--button');
const snowflakes = document.querySelector('.snowflakes');

function toggleSnow() {
    if (isSnowing) {
        snowflakes.style.display = 'none';
        snowButton.textContent = 'Hóesés BE';
    }
    else {
        snowflakes.style.display = 'block';
        snowButton.textContent = 'Hóesés KI';
    }
    isSnowing = !isSnowing;
}

snowButton.addEventListener('click', function(e) {
    e.preventDefault();
    toggleSnow();
});
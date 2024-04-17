// Define an array of image paths
var images = [
    "images/Province.png",
    "images/Terrain.png",
    "images/ColorPicker.png",

    // Add more image paths as needed
];
var index = 0;
var timeoutId;
var hoverImage = false; 
const interval = 1500;

function changeImage() {
    var projectImage = document.getElementById('grandStrategyImage');
    index++;
    if(index >= images.length)
        index = 0;
    projectImage.src = images[index];
    startTimeout(interval)
}

function startTimeout(timeSpan) {
    timeoutId = setTimeout(changeImage, timeSpan); // 5000 milliseconds = 5 seconds
}

function stopTimeout() {
    clearTimeout(timeoutId);
}

document.getElementById('grandStrategyImage').addEventListener('mouseover', function () {
    startTimeout(interval * 0.5);
});

document.getElementById('grandStrategyImage').addEventListener('mouseout', function () {
    stopTimeout();
});
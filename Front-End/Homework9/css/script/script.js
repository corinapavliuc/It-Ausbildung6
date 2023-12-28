button1.addEventListener('click', function() {
    square1.style.backgroundColor = 'green';
    square1.style.width = '100px';
    square1.style.height = '100px';
});

button2.addEventListener('click', function() {
    square2.style.backgroundColor = 'blue';
    console.log(square2.style.backgroundColor);
});

button3.addEventListener('click', function() {
    var currentWidth = parseInt(square3.style.width);
    var currentHeight = parseInt(square3.style.height);
    square3.style.width = (currentWidth + 20) + 'px';
    square3.style.height = (currentHeight + 20) + 'px';
});

button4.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Sample Text';
    paragraph.style.color = 'blue';
    root4.appendChild(paragraph);
});

var colors = ['blue', 'green'];
var currentColorIndex = 0;

button5.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Sample Text';
    paragraph.style.color = colors[currentColorIndex];
    root5.appendChild(paragraph);

    currentColorIndex++;
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
});
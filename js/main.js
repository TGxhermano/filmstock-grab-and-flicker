//DRAG FILMSTOCK
var mousePosition;
var mousePositionOffset = [0,0];
var divFilmStockFootage;
var mouseButtonDown = false;

divFilmStockFootage = document.getElementById("filmStockFootage");

divFilmStockFootage.addEventListener('mousedown', function(e) {
    mouseButtonDown = true;
    mousePositionOffset = [
        divFilmStockFootage.offsetLeft - e.clientX,
        divFilmStockFootage.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    mouseButtonDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (mouseButtonDown) {
        mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        divFilmStockFootage.style.left = (mousePosition.x + mousePositionOffset[0]) + 'px';
        //divFilmStockFootage.style.top  = (mousePosition.y + mousePositionOffset[1]) + 'px'; // killes vertical movement
    }
}, true);

//CREATE IMG DIVS
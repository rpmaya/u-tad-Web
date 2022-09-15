function prev() {
    var current = document.getElementById('image').src;
    console.log(current);
    document.getElementById('image').src = "images/moto03.jpg";
}

function next() {
    var current = document.getElementById('image').src;
    console.log(current);
    document.getElementById('image').src = "images/moto02.jpg";
}
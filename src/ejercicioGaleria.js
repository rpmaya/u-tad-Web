const max = 3;

function prev() {
    var current = document.getElementById('image').getAttribute('src').substring(12,13);
    var updated = parseInt(current) - 1;
    if (updated === 0) {
        updated = max;
    }
    var newsrc = "images/moto0" + updated + ".jpg";
    document.getElementById('image').src = newsrc;
}

function next() {
    var current = document.getElementById('image').getAttribute('src').substring(12,13);
    var updated = parseInt(current) + 1;
    if (updated > max) {
        updated = 1;
    }
    var newsrc = "images/moto0" + updated + ".jpg";
    document.getElementById('image').src = newsrc;
}
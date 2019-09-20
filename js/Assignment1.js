function createQuote() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let room = document.getElementById('room').value;
    let width = document.getElementById('width').value;
    let length = document.getElementById('length').value;
    let paintColour = document.getElementById('paintColour').value;
    let paint = document.getElementById('paint').value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("room", room);
    localStorage.setItem("width", width);
    localStorage.setItem("length", length);
    localStorage.setItem("paintColour", paintColour);
    localStorage.setItem("paint", paint);

    location.replace("quote.html");
}

function retrieveData() {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let room = localStorage.getItem("room");
    let width = localStorage.getItem("width");
    let length = localStorage.getItem("length");
    let paintColour = localStorage.getItem("paintColour");
    let paint = localStorage.getItem("paint");

    var totalSpace = width * length;
    var totalCans = totalSpace / 400;
    var paintPrice;

    if (paint.value = 'standard') {
        paintPrice = 24.99;
    }
    else {
        paintPrice = 39.99;
    }

    var total = totalCans * paintPrice * 1.13;

    document.getElementById('nameOut').value = name;
    document.getElementById('emailOut').value = email;
    document.getElementById('roomOut').value = room;
    document.getElementById('widthOut').value = width;
    document.getElementById('lengthOut').value = length;
    document.getElementById('paintColourOut').value = paintColour;
    document.getElementById('totalSpaceOut').value = totalSpace;
    document.getElementById('totalCansOut').value = totalCans.toFixed(0);
    document.getElementById('totalOut').value = total.toFixed(2);
}
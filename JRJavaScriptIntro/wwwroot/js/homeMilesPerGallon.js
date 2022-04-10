'use strict';

let calculateButton = document.getElementById("calculateBtn");
calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    let litersUsed = document.getElementById("LitersUsed").value;
    let milesTraveled = document.getElementById("MilesTraveled").value;
    let milesPerGallon = calculateMPG(litersUsed, milesTraveled);
    document.getElementById("MilesPerGallon").value = milesPerGallon;
});

function litersToGallons(liters) {
    return liters * 0.264179;
}

function calculateMPG(liters, milesTraveled) {
    let gallons = litersToGallons(liters);
    return milesTraveled / gallons;
}

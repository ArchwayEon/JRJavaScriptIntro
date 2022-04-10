'use strict';
let c = document.getElementById("drawingArea");
let ctx = c.getContext("2d");

let rangeWidth = document.getElementById("rangeWidth");
let rangeHeight = document.getElementById("rangeHeight");
let rangeWidthDisplay = document.getElementById("rangeWidthDisplay");
let rangeHeightDisplay = document.getElementById("rangeHeightDisplay");

ctx.fillStyle = 'orange';
drawRectangle(400, 200, rangeWidth.value, rangeHeight.value);

rangeWidthDisplay.value = rangeWidth.value;
rangeHeightDisplay.value = rangeHeight.value;

rangeWidth.addEventListener("input", (e) => {
    rangeWidthDisplay.value = rangeWidth.value;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 800, 400);
    ctx.fillStyle = 'orange';
    drawRectangle(400, 200, rangeWidth.value, rangeHeight.value);
});

rangeHeight.addEventListener("input", (e) => {
    rangeHeightDisplay.value = rangeHeight.value;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 800, 400);
    ctx.fillStyle = 'orange';
    drawRectangle(400, 200, rangeWidth.value, rangeHeight.value);
});

function drawRectangle(midX, midY, width, height) {
    let sx = midX - width / 2;
    let sy = midY - height / 2;
    ctx.fillRect(sx, sy, width, height);
}



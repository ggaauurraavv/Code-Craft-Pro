const canvas = document.getElementById("canvas")
const body = document.querySelector('body');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var theColor = '';
var lineW = 5;
let prevX = null
let prevY = null
let draw = false

body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function(){
  theColor = theInput.value;
  body.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext("2d")
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function() {
    draw = null
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};  

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const colors = document.querySelectorAll(".clr");
    const eraser = document.querySelector(".eraser");

    let isDrawing = false;
    let brushColor = "#000"; // Default color
    let brushSize = 5;
    
    // Function to get the current background color of the canvas
    function getCanvasBackgroundColor() {
        return window.getComputedStyle(canvas).backgroundColor || "#fff";
    }

    canvas.width = window.innerWidth - 20;
    canvas.height = window.innerHeight - 100;

    canvas.addEventListener("mousedown", () => isDrawing = true);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mousemove", draw);

    function draw(event) {
        if (!isDrawing) return;
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = brushColor;
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY);
    }

    colors.forEach(color => {
        color.addEventListener("click", function () {
            brushColor = this.getAttribute("data-clr");
        });
    });

    eraser.addEventListener("click", function () {
        brushColor = getCanvasBackgroundColor(); // Set brush color to match background
    });
});


document.getElementById('Home').addEventListener('click', function() {
    window.location.href = 'index.html';
});

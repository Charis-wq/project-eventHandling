//get element by DOm
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const burshBtn = document.getElementById('brush');
const eraserBtn = document.getElementById('eraser');
const colorBtn = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clear');

//set canvas size
canvas.width = 800;
canvas.height = 500;

//variabel to store state of the tools
let painting = false;
let erasing = false;
let currentColor = '#000000';
let linewidth = 5;

//function to startPainting
function startPosition(e){
    painting = true;
    draw(e) //function to draw canvas
}

//function stopPainting
function endPosition(e){
    painting = false;
    ctx.beginPath() // statr new path
}

//function to draw to canvas 
function draw(e){
    if (!painting) return

    ctx.linewidth = linewidth
    ctx.linecap = 'round'
    ctx.strokeStyle = erasing ? '#ffffff' : currentColor

    ctx.lineTo( e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)


}

//function to brush 
function selectBrush(){
    erasing = false;
    burshBtn.classList.add('active');
    eraserBtn.classList.remove('active');

}

//function to eraser
function selectEraser(){
    erasing = true;
    eraserBtn.classList.add('active');
    burshBtn.classList.remove('active');
}

//function to clear canvas
function clearCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
}

//function to change color 
function changeColor(e){
    currentColor = e.target.value;
}

//add event listener to each tool
burshBtn.addEventListener('click', selectBrush);
eraserBtn.addEventListener('click', selectEraser);
clearBtn.addEventListener('click',clearCanvas);
colorBtn.addEventListener('input', changeColor);

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
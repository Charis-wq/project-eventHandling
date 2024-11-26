document.getElementById('colorInput').
addEventListener('input', function(event){
    //get the selected color from input
    let selectedColor = event.target.value

     //update the color text
    document.getElementById('colorCode').
    textContent = selectedColor
    
    //update the background color of the display box
    document.getElementById('colorDisplay').style.
    backgroundColor =selectedColor
})
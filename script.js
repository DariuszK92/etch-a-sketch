

const paraSlider = document.getElementById("slider-value");
const slider = document.getElementById("pixels");


//Function that modifies paragraph value showing the number of pixels
const showSliderValue = () => {
    paraSlider.textContent= slider.value + "x" + slider.value; 
}
slider.addEventListener('mousemove', showSliderValue);





//Get slider value to calculate child divs width and height

let  currentSliderValue = () => {
currentSliderValue = slider.value;
}
slider.addEventListener('mousemove', currentSliderValue);
//Get square value of divs to calculate number of divs needed
let squareSliderValue =() =>{
 squareSliderValue = slider.value*slider.value;
 console.log(squareSliderValue);
}
slider.addEventListener('mousemove', squareSliderValue);

//Creation of gridlines onload
function initialDivs(){
    for(let i=0; i<2500;i++){
        const div = document.createElement("div");
        container.appendChild(div);  
        div.style.setProperty('width',`calc(100%/50)`);
        div.className = "children";
        }      
}

window.addEventListener("load", initialDivs);

//Create childs for a div by moving the slider
const container = document.getElementById("sketch");
const createDivs = () => {
        while(container.firstChild){
            container.removeChild(container.lastChild)
        }
       for(let i=0; i<squareSliderValue;i++){
        const childDiv = document.createElement("div");
        container.appendChild(childDiv);  
        childDiv.style.setProperty('width',`calc(100%/${currentSliderValue})`);
        childDiv.className = "children";
       
        }      
}

slider.addEventListener('mousemove', createDivs);

//Removing borders from child elements


function addGrid(){
    const boxes = document.getElementsByClassName('children');
    for (const children of boxes) {
    children.classList.remove('noborder');
    children.classList.add('border');
  }
}


function removeGrid(){
    const boxes = document.getElementsByClassName('children');
    for (const children of boxes) {
    children.classList.remove('border');
    children.classList.add('noborder');
  }
}
//Clear all

//Coloring the divs


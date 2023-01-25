
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
 
}
slider.addEventListener('mousemove', squareSliderValue);

//Creation of gridlines onload
function initialDivs(){
    for(let i=0; i<625;i++){
        const childDiv = document.createElement("div");
        container.appendChild(childDiv);  
        childDiv.style.setProperty('width',`calc(100%/25)`);
        childDiv.classList.add('children'); 
        let isGridBtnClicked = false;
        pickColor();
        childDiv.addEventListener('mouseover', changeColor)
        }     
         
}

window.addEventListener("load", initialDivs);

//Create childs for a div by moving the slider
const container = document.getElementById("sketch");
let isGridBtnClicked = "no";

const createDivs = () => {
        while(container.firstChild){
          container.removeChild(container.lastChild);
        }
       for(let i=0; i<squareSliderValue;i++){
          const childDiv = document.createElement("div");
          container.appendChild(childDiv);  
          childDiv.style.setProperty('width',`calc(100%/${currentSliderValue})`);
            if(isGridBtnClicked==="yes"){
            childDiv.classList.add('children', 'border');
            pickColor();
            childDiv.addEventListener('mouseover', changeColor)
            }
            else{
            childDiv.classList.add('children','noborder');
            pickColor(); 
            childDiv.addEventListener('mouseover', changeColor)
            }   
        }  
                   
};

slider.addEventListener('mousemove', createDivs);

//Removing/adding borders from container grid elements

const gridBtn = document.getElementById("grid-button");
gridBtn.addEventListener('click', addGrid);
function addGrid(){
    let isBorderApplied=document.getElementsByClassName('border');
   
    if (isBorderApplied.length > 0) {
         const boxes = document.getElementsByClassName('children');
    for (const children of boxes) {
    children.classList.remove('border');
    children.classList.add('noborder');
    
  }
  isGridBtnClicked = "no";
  gridBtn.classList.remove('button-clicked');

  }
      else{
        const boxes = document.getElementsByClassName('children');
    for (const children of boxes) {
    children.classList.add('border');
    children.classList.remove('noborder');
    
    }
    isGridBtnClicked = "yes";
    gridBtn.classList.add('button-clicked');
    
      }
    }


//Coloring/erasing the divs

const colorBtn = document.getElementById('color-button');
const rainbowBtn = document.getElementById('rainbow-button');
const eraserBtn = document.getElementById('eraser-button');

let brushType="color";
colorBtn.onclick = () =>{
  brushType="color";
  chooseColor();
}
rainbowBtn.onclick = () =>{
  brushType="rainbow";
  chooseColor();
}
eraserBtn.onclick = () =>{
  brushType="eraser";
  chooseColor();
}

function chooseColor(){
  if(brushType==="color"){
    colorBtn.classList.add('button-clicked');
    rainbowBtn.classList.remove('button-clicked');
    eraserBtn.classList.remove('button-clicked');
    console.log(brushType)
  }
  else if(brushType==="rainbow"){
    colorBtn.classList.remove('button-clicked');
    rainbowBtn.classList.add('button-clicked');
    eraserBtn.classList.remove('button-clicked');
    console.log(brushType)
  }
  else{
    colorBtn.classList.remove('button-clicked');
    rainbowBtn.classList.remove('button-clicked');
    eraserBtn.classList.add('button-clicked');
    console.log(brushType)
  }
}



const colorPicker = document.getElementById('paint-color');
let brushColor=colorPicker.value;

function changeColor(e){
  if(brushType==='color'){
  let brushColor = colorPicker.value;
  e.target.style.backgroundColor = brushColor;
  console.log(brushType)
  }
  else if(brushType==='rainbow'){
  let redColor = (Math.random()*256);
  let greenColor = (Math.random()*256);
  let blueColor = (Math.random()*256);
  e.target.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
  console.log(brushType)
  }
  else if(brushType==='eraser'){
    let brushColor = colorPicker.value;
    let theColor = theInput.value;
  e.target.style.backgroundColor = theColor;
  console.log(brushType)
  }
}



//Setting the background color
let theInput = document.getElementById("background-color");

function pickColor(){
  let theColor = theInput.value;
  const childDivs = document.querySelectorAll('.children');
  childDivs.forEach(children =>{
    children.style.backgroundColor = theColor;
  })
};

theInput.addEventListener("input", pickColor)
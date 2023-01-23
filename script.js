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


//Create childs for a div
const createDivs = () => {
const container = document.getElementById("sketch");
        while(container.firstChild){
            container.removeChild(container.lastChild)
        }
       for(let i=0; i<squareSliderValue;i++){
        const div = document.createElement("div");
        container.appendChild(div);  
        div.style.setProperty('width',`calc(100%/${currentSliderValue})`); 
        }

}
slider.addEventListener('mousemove', createDivs);


const divsDrawing = document.getElementById("createdivs");
divsDrawing.addEventListener('onclick', createDivs);
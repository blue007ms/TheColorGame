var numOf = 6;
var colors = generateRandomColors(numOf);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var restButton = document.getElementById("rest");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
 
colorDisplay.textContent = pickedColor;





for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
     var clickedColor = this.style.background;
     if(clickedColor === pickedColor){
         messageDisplay.textContent = "WELL DONE!!";
         restButton.textContent = "Play Agine?";
         changeColors(clickedColor);
         h1.style.background = clickedColor;

     }else{

        this.style.background = "#232323";
        messageDisplay.textContent = "TRY AGINE!!";
     }
       
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){


        squares[i].style.background = color;
    }

}
function pickColor(){

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []

    for(var i = 0; i < num; i++){

        arr.push(randomColor())


    }
 return arr;
}
function randomColor(){

   var r = Math.floor(Math.random() * 256)
   var g = Math.floor(Math.random() * 256)
   var b = Math.floor(Math.random() * 256)

 return "rgb(" + r + ", " + g + ", " + b + ")";

}

restButton.addEventListener("click", function(){
    colors = generateRandomColors(numOf);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
h1.style.background = "steelblue";
restButton.textContent = "New Game";
    
    
 
 });

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOf = 3;
    colors = generateRandomColors(numOf);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

});

h1.style.background = "steelblue";
restButton.textContent = "New Game";

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numOf);
    numOf = 6;
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i < squares.length; i++){
       
            squares[i].style.background = colors[i];
        
            squares[i].style.display = "block";
        }
});

h1.style.background = "steelblue";
restButton.textContent = "New Game";
const W_KEY = 87; //sets a constant for W key
const A_KEY = 65;//sets a constant for a key
const S_KEY = 83;//sets a constant for s key
const D_KEY = 68; //sets a constant for d key
const P_KEY = 80;//sets a constant for p key
const O_KEY = 79;//sets a constant for o key

const UP_ARROW = 38;//sets a constant for up arrow key
const DOWN_ARROW = 40;//sets a constant for down arrow key
const RIGHT_ARROW = 39;//sets a constant for right arrow key
const LEFT_ARROW = 37;//sets a constant for left arrow key

const SNAKE_SIZE = 30; //sets the size of the snakes
let start = true; //makes the "start" variable true
let RECT = false; // makes the "RECT" variable false

function preload() {
	heebo = loadFont("heebo.ttf") //loads the font from the file 
  startScreen = loadImage("startscreen.jpg") //loads the image from the file
}

function setup() {
  createCanvas(windowWidth, windowHeight); //sets the canvas size
  

  
  X = 10; // x coordinate for the red snake
  Y = 10; // x coordinate for the red snake

  x = X - 5;
  y = Y - 5;
  
  A = width/1.1; //x coordinate for the green snake
  B = height/1.1; // y coordinate for the green snake
  

	redSnake = [];
	greenSnake = [];
	
	redSnake.push(X)
	redSnake.push(Y)
	
	greenSnake.push(A)
	greenSnake.push(B)
	
	textFont(heebo, 70) // creates the text font and size 

 
}
    
function draw() {
  
  fill(255, 0, 0); // makes the color red
  strokeWeight(0); // makes the outline 0 or nothing
  rect(X, Y, 20, 20); // sets the size of the square
  textSize(70); // sets the size of the text
 
  
   if (keyIsDown(W_KEY)){
     Y += -3.5; // adds -3.5 to the Y when W is pressed for the red snake
		 redSnake.push(X)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 redSnake.push(Y)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
   }
	if (keyIsDown(S_KEY)){
	     Y += 3.5; // adds 3.5 to the Y when s is pressed for the red snake
		 redSnake.push(X)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 redSnake.push(Y)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
	   } 
	if (keyIsDown(A_KEY)){
	     X += -3.5; // adds -3.5 to the X when A is pressed for the red snake
		 redSnake.push(X)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 redSnake.push(Y)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
	}
	if (keyIsDown(D_KEY)){
	     X += 3.5; // adds 3.5 to the X when D is pressed for the red snake
		 redSnake.push(X)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 redSnake.push(Y)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
	}


  if (keyIsDown(UP_ARROW)){
     B += -3.5;// adds -3.5 to the Y "B" when the up arrow is pressed for the green snake
		 greenSnake.push(A)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 greenSnake.push(B)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
   } 

	if (keyIsDown(DOWN_ARROW)){
	     B += 3.5;// adds 3.5 to the Y "B" when the down arrow is pressed for the green snake
		 greenSnake.push(A)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 greenSnake.push(B)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
	   } 
	
	if (keyIsDown(LEFT_ARROW)){
	     A += -3.5; // adds -3.5 to the X "A" when the left arrow is pressed for the green snake
		 greenSnake.push(A)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 greenSnake.push(B)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
	}
	if (keyIsDown(RIGHT_ARROW)){
	     A += 3.5;// adds 3.5 to the X "A" when the right arrow is pressed for the green snake
		 greenSnake.push(A)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
		 greenSnake.push(B)//adds squares to the front of the snake         and gets rid of squares on the back of the snake.
	}

	// keeps track of the most recent 50 spots for the green snake
	while (greenSnake.length > SNAKE_SIZE) {
		greenSnake.shift() // removes the first number
		greenSnake.shift() // removes the second number
	}
	
	// keeps track of the most recent 50 spots for the red snake	
	while (redSnake.length > SNAKE_SIZE) {
		redSnake.shift() // removes the first number
		redSnake.shift() // removes the second number
	}

	background(255) // clears the screen
	
  fill(0, 255, 0) // draws the green snake
	for (let i = 0; i < greenSnake.length; i+=2) {
		rect(greenSnake[i], greenSnake[i+1], 20)
	}  
  fill(255, 0, 0) // draws the red snake
	for (let i = 0; i < redSnake.length; i+=2) {
		rect(redSnake[i], redSnake[i+1], 20)
	}

	greenHeadX = greenSnake[greenSnake.length-2]//provides the number of arguments actually passed to the function
	greenHeadY = greenSnake[greenSnake.length-1]//provides the number of arguments actually passed to the function
	redTailX = redSnake[0]
	redTailY = redSnake[1]
	
	
	if (abs(greenHeadX - redTailX) < 20 && abs(greenHeadY - redTailY) < 20) {
		fill(0, 255, 0);//makes the text green
		text("Green wins", 50,100)//gives the coordinates for the text to show on screen
	}

	redHeadX = redSnake[redSnake.length-2]//provides the number of arguments actually passed to the function
	redHeadY = redSnake[redSnake.length-1]//provides the number of arguments actually passed to the function
	greenTailX = greenSnake[0]
	greenTailY = greenSnake[1]
	
	if (abs(redHeadX - greenTailX) < 20 && abs(redHeadY - greenTailY) < 20) {
		fill(255,0,0);//makes the text red
		text("Red wins", 50, 100);//gives the coordinates for the text to show on screen
	}

	if (RECT == true) {
		fill(0, 0, 0,);//sets the squares color to black
		rect(mouseX, mouseY, 20, 20);//makes the square follow the mouse and defines its size
	}
	if (RECT == false) {
		fill(256); //sets the color to white
		
	}
	 fill(random(256), random(256), random(256)); //makes the colors random 
    textSize(20);//sets the text size
    text("Ryan Cloes", 5, height/1.05);//sets where the name is on the screen


 if (start) {
 	image(startScreen, 0, 0, width, height); //when the run key is pressed the image will be shown on the screen
 }
  if(mouseIsPressed) {
    start = false; // when the mouse is clicked the image will be set to false and will be hidden
  }
   
}


function doubleClicked() {
  start = true; //when the mouse is double clicked the image will be shown on the screen again
}



function keyPressed(){
 if(keyIsDown(P_KEY)) { 
       RECT = true //when the P key is pressed rect is set to true
	   
 }
  
  if(keyIsDown(O_KEY)){
  RECT = false //when the o key is pressed rect is set to false
  }

}
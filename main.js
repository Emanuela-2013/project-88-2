 window.addEventListener("keydown", my_keydown);
var canvas = new fabric.Canvas('myCanvas');
var ball_obj; 

var ball_y = 0;
var ball_x = 0;
var hole_y = 400;
var hole_x = 800;
var block_image_width = 5;
var block_image_height = 5;

function load_img() {
  fabric.Image.fromURL("golf-h.png", function(Img) {
    hole_obj = Img;
    hole_obj.scaleToWidth(50);
    hole_obj.scaleToHeight(50);
    hole_obj.set({
      top: hole_y,
      left: hole_x
    });
    canvas.add(hole_obj);
  });
  new_image();
}
function new_image() {
	fabric.Image.fromURL("ball.png", function(Img) {
	  ball_obj = Img;
	  ball_obj.scaleToWidth(50);
	  ball_obj.scaleToHeight(50);
	  ball_obj.set({
		top: ball_y,
		left: ball_x
	 
  });
	  canvas.add(ball_obj);
	
     });
  }

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == '37') {
    left();
    console.log("left");
  }

  if (keyPressed == '39') {
    right();
    console.log("right");
  }
  if (keyPressed == '38') {
    up();
    console.log("up");
  }
  if (keyPressed == '40') {
    down();
    console.log("down");
  }

  if ((ball_x == hole_x) && (ball_y == hole_y)) {
     document.getElementById("hd3").innerHTML = "You have Hit the Goal! Congratulations";
    document.getElementById("myCanvas").style.borderColor = "red";
  }
}

function up() {
  if (ball_y > 5) {
    ball_y -= 10;
    console.log("When Up arrow key is pressed: X = " + ball_x + ", Y = " + ball_y);
    canvas.remove(ball_obj); // Remove previous ball object
    new_image();
  }
}

function down() {
  if (ball_y <= 450) {
    ball_y += 10;
    console.log("When Down arrow key is pressed, X = " + ball_x + " , Y " + ball_y);
    canvas.remove(ball_obj); 
    new_image();
  }
}

function left() {
  if (ball_x > 5) {
    ball_x -= 10;
    console.log("When Left arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
    canvas.remove(ball_obj); 
    new_image();
}
}

function right() {
  if (ball_x <= 1050) {
    ball_x += 10;
    console.log("When Right arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
    canvas.remove(ball_obj); 
    new_image();
    }
}



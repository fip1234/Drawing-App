//////////ERASER TOOL///////////

//START
function EraserTool() {
    this.icon = "assets/eraser.jpg";
    this.name = "eraser";

	//Call variables for previous mouseX
    var previousmouseX = -1;
    var previousmouseY = -1;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousmouseX == -1){
                stroke(255)
                strokeWeight(1)
				previousmouseX = mouseX;
				previousmouseY = mouseY;
			}
//END
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(previousmouseX, previousmouseY, mouseX, mouseY);
				previousmouseX = mouseX;
				previousmouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousmouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousmouseX = -1;
			previousmouseY = -1;
		}
	};

}


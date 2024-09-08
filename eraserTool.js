//////////ERASER TOOL///////////

//START
function EraserTool() {
    this.icon = "assets/eraser.jpg";
    this.name = "eraser";
    
    // Variables for eraser thickness slider and previous mouse positions
    var eraserThicknessSlider;
    var previousmouseX = -1;
    var previousmouseY = -1;

    // Add slider to control eraser thickness
    this.populateOptions = function() {
        select(".options").html(
            "<div>Eraser Thickness</div>" +
            "<div id='eraserThicknessControl'></div>"
        );
        
        // Create the eraser thickness slider
        eraserThicknessSlider = createSlider(1, 50, 10); // Adjust min, max, default values as needed
        eraserThicknessSlider.parent(select("#eraserThicknessControl"));
    };

    // Clear the slider options when switching tools
    this.unselectTool = function() {
        select(".options").html("");
    };

    // Eraser tool draw function
    this.draw = function() {
        // Get the value of the eraser thickness slider
        var eraserThickness = eraserThicknessSlider.value();
        
        // Set stroke to white (255) and apply thickness from the slider
        stroke(255);
        strokeWeight(eraserThickness);

        // If the mouse is pressed, draw the erasing line
        if (mouseIsPressed) {
            // If previous mouse positions are not set, initialiSe them
            if (previousmouseX == -1) {
                previousmouseX = mouseX;
                previousmouseY = mouseY;
            } 
            // Draw a line from previous mouse position to current mouse position
            else {
                line(previousmouseX, previousmouseY, mouseX, mouseY);
                previousmouseX = mouseX;
                previousmouseY = mouseY;
            }
        } 
        // Reset previous mouse positions when the mouse is released
        else {
            previousmouseX = -1;
            previousmouseY = -1;
        }
    };
}

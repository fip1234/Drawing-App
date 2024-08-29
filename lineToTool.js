// A tool for drawing straight lines to the screen. Allows the user to preview
// the line to the current mouse position before drawing the line to the 
// pixel array.

function LineToTool() {
    this.icon = "assets/lineTo.jpg";
    this.name = "LineTo";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    // Variable to hold the line thickness slider
    var lineThicknessSlider;

    // Method to add the slider to the options area
    this.populateOptions = function() {
        // Populate the options area with a div for the slider
        select(".options").html(
            "<div>Line Thickness</div>" +
            "<div id='thicknessControl'></div>");

        // Create the slider and place it in the 'thicknessControl' div
        lineThicknessSlider = createSlider(1, 20, 1);
        lineThicknessSlider.parent(select("#thicknessControl"));
    };

    // Ensure the options are cleared when the tool is unselected
    this.unselectTool = function() {
        select(".options").html("");
    };

    // Draws the line to the screen 
    this.draw = function() {
        // Get the value from the slider
        var lineThickness = lineThicknessSlider.value();

        // Set the stroke weight to the value from the slider
        strokeWeight(lineThickness);

        // Only draw when the mouse is clicked
        if (mouseIsPressed) {
            // If it's the start of drawing a new line
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                // Save the current pixel array
                loadPixels();
            } else {
                // Update the screen with the saved pixels to hide any previous
                // line between mouse pressed and released
                updatePixels();
                // Draw the line
                line(startMouseX, startMouseY, mouseX, mouseY);
            }

            // START//
            // Code to make a curved line, still need to implement it 
            // noFill();
            // curve(startMouseX + 300, startMouseY + 300,
            //      startMouseX, startMouseY,
            //      mouseX, mouseY,
            //      mouseX + 100, mouseY + 100);
            // }
            // END//
        } else if (drawing) {
            // Save the pixels with the most recent line and reset the
            // drawing bool and start locations
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };
}

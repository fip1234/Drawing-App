// A tool for drawing straight or curved lines to the screen. Allows the user to preview
// the line to the current mouse position before drawing the line to the pixel array.

function LineToTool() {
    this.icon = "assets/lineTo.jpg";
    this.name = "LineTo";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    // Variable to hold the line thickness slider and line type dropdown
    var lineThicknessSlider, lineTypeSelect;

    // Method to add the slider and dropdown to the options area
    this.populateOptions = function() {
        // Populate the options area with a div for the slider and dropdown
        select(".options").html(
            "<div>Line Thickness</div>" +
            "<div id='thicknessControl'></div>" +
            "<div>Line Type</div>" +
            "<div id='lineTypeControl'></div>");

        // Create the slider and place it in the 'thicknessControl' div
        lineThicknessSlider = createSlider(1, 20, 1);
        lineThicknessSlider.parent(select("#thicknessControl"));

        // Create a dropdown to select between Straight Line and Curved Line
        lineTypeSelect = createSelect();
        lineTypeSelect.option('Straight Line');
        lineTypeSelect.option('Curved Line');
        lineTypeSelect.parent(select("#lineTypeControl"));
    };

    // Ensure the options are cleared when the tool is unselected
    this.unselectTool = function() {
        select(".options").html("");
    };

    // Draws the line to the screen 
    this.draw = function() {
        // Get the value from the slider and dropdown
        var lineThickness = lineThicknessSlider.value();
        var lineType = lineTypeSelect.value();  // Either 'Straight Line' or 'Curved Line'

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

                // Draw based on the selected line type
                if (lineType === 'Straight Line') {
                    // Draw a straight line
                    line(startMouseX, startMouseY, mouseX, mouseY);
                } else if (lineType === 'Curved Line') {
                    // Draw a curved line
                    noFill();
                    curve(startMouseX + 300, startMouseY + 300,
                         startMouseX, startMouseY,
                         mouseX, mouseY,
                         mouseX + 100, mouseY + 100);
                }
            }

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

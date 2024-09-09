// Kaleidoscope Tool
function KaleidoscopeTool() {
    this.name = "kaleidoscopeTool";
    this.icon = "assets/kaleidoscope.jpg";

    this.populateOptions = function() {
        select(".options").html(
            "<div>Colour Saturation</div>" +
            "<div id='colourControl'></div>" +
            "<div>Number of Reflections</div>" +
            "<div id='angleControl'></div>" +
            "<div>Line Thickness</div>" +
            "<div id='thicknessControl'></div>"
        );

        // Create sliders and place them in the corresponding containers
        // In order to control the colour
        colourSatSlider = createSlider(100, 255, 50);
        colourSatSlider.parent(select("#colourControl"));

        // In order to control the angle
        nReflection = createSlider(6, 32, 6);
        nReflection.parent(select("#angleControl"));

        // In order to control the line thickness
        lineThicknessSlider = createSlider(1, 20, 15);
        lineThicknessSlider.parent(select("#thicknessControl"));

        // Ensure HSB colorMode is used for Kaleidoscope
        colorMode(HSB, 360, 150, 100, 1);
    };

    // To ensure that when another tool is pressed, the kaleidoscope options don't stay
    this.unselectTool = function() {
        select(".options").html("");
        // Reset back to RGB color mode when unselecting Kaleidoscope
        colorMode(RGB, 255, 255, 255, 255);
    };

    // Draw function for Kaleidoscope
    this.draw = function() {
        if (mouseIsPressed) {
//end
            translate(width / 2, height / 2);

            // Set variables for the slider values
            var sat = colourSatSlider.value();
            var angle = nReflection.value();
//start
            var lineThickness = lineThicknessSlider.value();

            for (var i = 0; i < angle; i++) {
                // Use the value to set the angle
                rotate(TWO_PI / angle);
                strokeWeight(lineThickness);

                stroke(mouseX, sat, sat, 0.5);
                // To allow it to be drawn
                line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
                push();
                scale(1, -1);
                line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
                pop();
            }
        }
    };
}

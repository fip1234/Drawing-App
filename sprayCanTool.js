function SprayCanTool() {
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";

    // Variables for the spray points, spread, and slider controls
    var points = 13;
    var spread = 10;
    var spreadSlider, pointThicknessSlider;

    // Method to add the sliders to the options area
    this.populateOptions = function() {
        // Populate the options area with a div for the sliders
        select(".options").html(
            "<div>Spray Radius (Spread)</div>" +
            "<div id='spreadControl'></div>" +
            "<div>Spray Thickness</div>" +
            "<div id='thicknessControl'></div>"
        );

        // Create a slider for controlling the spread radius
        spreadSlider = createSlider(5, 100, spread);
        spreadSlider.parent(select("#spreadControl"));

        // Create a slider for controlling the thickness of the spray points
        pointThicknessSlider = createSlider(1, 10, 1);
        pointThicknessSlider.parent(select("#thicknessControl"));
    };

    // Ensure the options are cleared when the tool is unselected
    this.unselectTool = function() {
        select(".options").html("");
    };

    // Method to draw the spray effect
    this.draw = function() {
        // Get the values from the sliders
        var spread = spreadSlider.value();
        var pointThickness = pointThicknessSlider.value();

        // Only spray when the mouse is pressed
        if (mouseIsPressed) {
            for (var i = 0; i < points; i++) {
                // Set the stroke weight to the value from the pointThickness slider
                strokeWeight(pointThickness);
                
                // Draw random points within the spread radius
                point(random(mouseX - spread, mouseX + spread), random(mouseY - spread, mouseY + spread));
            }
        }
    };
}

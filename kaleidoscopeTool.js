var colourSatSlider;
var nReflection;
var lineThicknessSlider;

//starts
function kaleidoscopeTool() {
    this.name = "kaleidoscopeTool";
    this.icon = "assets/kaleidoscope.jpg";
//end

        colorMode(HSB, 360, 150, 100, 1);
//start
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
        colourSatSlider = createSlider(100, 255, 50);
        colourSatSlider.parent(select("#colourControl"));

        nReflection = createSlider(6, 32, 6);
        nReflection.parent(select("#angleControl"));

        lineThicknessSlider = createSlider(1, 20, 15); 
        lineThicknessSlider.parent(select("#thicknessControl"));
    };

    this.unselectTool = function() {
        select(".options").html("");
    };



    this.draw = function() {
        if (mouseIsPressed) {
//end
            translate(width / 2, height / 2);
            var sat = colourSatSlider.value();
            var angle = nReflection.value();
//start
            var lineThickness = lineThicknessSlider.value(); 

            for (let i = 0; i < angle; i++) {
                rotate(TWO_PI / angle); 
                strokeWeight(lineThickness);
//end
                stroke(mouseX, sat, sat, 0.5);
                line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
                push();
                scale(1, -1);
                line(mouseX - width / 2, mouseY - height / 2, pmouseX - width / 2, pmouseY - height / 2);
                pop();
            }
        }
    };
}

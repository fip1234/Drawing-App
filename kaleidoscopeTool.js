var angle;
var colourSatSlider;
var nReflection;

function kaleidoscopeTool() {
    this.name = "kaleidoscopeTool";
    this.icon = "assets/kaleidoscope.jpg";


        colorMode(HSB, 360, 150, 100, 1);

    this.populateOptions = function() {
        // Clear the .options div and add slider containers
        select(".options").html(
            "<div>Color Saturation</div>" +
            "<div id='colourControl'></div>" +
            "<div>Number of Reflections</div>" +
            "<div id='angleControl'></div>"
        );

        // Create sliders and place them in the corresponding containers
        colourSatSlider = createSlider(100, 255, 50);
        colourSatSlider.parent(select("#colourControl"));

        nReflection = createSlider(6, 32, 6);
        nReflection.parent(select("#angleControl"));
    };


    this.draw = function() {
        if (mouseIsPressed) {
            translate(width / 2, height / 2);
            var sat = colourSatSlider.value();
            angle = nReflection.value();
            for (let i = 0; i < angle; i++) {
                rotate(TWO_PI / angle); 
                strokeWeight(15);
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

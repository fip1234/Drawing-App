var star;
var starSizeSlider;
var nStarSlider;

function StampTool() {
    this.name = "stampTool";
    this.icon = "assets/stamp.jpg";

    this.populateOptions = function() {
        // Clear the .options div and add slider containers
        select(".options").html(
            "<div>Star Size</div>" +
            "<div id='sizeOfStarControl'></div>" +
            "<div>Number of Stars</div>" +
            "<div id='numberOfStarsControl'></div>"
        );

        starSizeSlider = createSlider(5, 50, 20);
        starSizeSlider.parent("#sizeOfStarControl");

        nStarSlider = createSlider(1, 20, 5);
        nStarSlider.parent("#numberOfStarsControl");
    };

    this.unselectTool = function() {
        select(".options").html("");
    };

    this.draw = function() {
        if (mouseIsPressed && star) {
            for (var i = 0; i < nStarSlider.value(); i++) {
                var starSize = starSizeSlider.value();
                var starX = random((mouseX - starSize / 2) - 10, (mouseX - starSize / 2) + 10);
                var starY = random((mouseY - starSize / 2) - 10, (mouseY - starSize / 2) + 10);
                image(star, starX, starY, starSize, starSize);
            }
        }
    };
}

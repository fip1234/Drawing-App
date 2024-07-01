var star;
var starSizeSlider;
var nStarSlider;

function StampTool() {
    this.name = "stampTool";
    this.icon = "assets/stamp.jpg";

    this.populateOptions = function() {
        starSizeSlider = createSlider(5, 50, 20);
        starSizeSlider.parent("#sizeOfStarControl");

        nStarSlider = createSlider(1, 20, 5);
        nStarSlider.parent("#numberOfStarsControl");
    }

        this.draw = function() {
            if (mouseIsPressed && star) {
                for (var i = 0; i < nStarSlider.value(); i++) {
                    var starSize = starSizeSlider.value();
                    var starX = random((mouseX - starSize / 2) - 10, (mouseX - starSize / 2) + 10);
                    var starY = random((mouseY - starSize / 2) - 10, (mouseY - starSize / 2) + 10);
                    image(star, starX, starY, starSize, starSize);
                }
            }
        }
        
}

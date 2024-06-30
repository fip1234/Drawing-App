function StampTool() {
    this.name = "stampTool";
    this.icon = "assets/stamp.jpg";

    var star;
    var starSizeSlider;
    var nStarSlider;

    this.preload = function() {
        star = loadImage('./assets/star.png');
    }

    this.populateOptions = function() {
        starSizeSlider = createSlider(5, 50, 20);
        starSizeSlider.parent("#sizeOfStarControl");

        nStarSlider = createSlider(1, 20, 5);
        nStarSlider.parent("#numberOfStarsControl");
    }

    this.draw = function() {
        console.log("Draw function of StampTool is called."); // Check if this log appears in the console
    
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
    

    this.unselectTool = function() {
        if (starSizeSlider) {
            starSizeSlider.remove();
        }
        if (nStarSlider) {
            nStarSlider.remove();
        }
    }
}

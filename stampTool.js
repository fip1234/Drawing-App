/////////////STAMP TOOL//////////


//Set the variables
var star;
var starSizeSlider;
var nStarSlider;

//Call the function for the stamptool. This function will be called in setup of sketch.js of the toolbox
function StampTool() {
    //path to the stamp tool image
    this.name = "stampTool";
    this.icon = "assets/stamp.jpg";

    //set the populateOptions function to contain the sliders at the bottom div
    this.populateOptions = function() {
        select(".options").html(
            "<div>Star Size</div>" +
            "<div id='sizeOfStarControl'></div>" +
            "<div>Number of Stars</div>" +
            "<div id='numberOfStarsControl'></div>"
        );

        //create the slider to control the size of the stars
        starSizeSlider = createSlider(5, 50, 20);
        starSizeSlider.parent("#sizeOfStarControl");

        //create the slider to control the number of stars shown
        nStarSlider = createSlider(1, 20, 5);
        nStarSlider.parent("#numberOfStarsControl");
    };

    //To ensure that when another tool is pressed, the stamptool otpions dont stay
    this.unselectTool = function() {
        select(".options").html("");
    };


    //calls the draw function
    this.draw = function() {
        //if mouse is pressed, it allows for the star image to be placed in the area where the mouse is (according to x and y coordinates)
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

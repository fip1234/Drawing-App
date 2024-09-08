/////////////STAMP TOOL//////////


//Set the variables
var star, bow, cherry, currentStamp;
var starSizeSlider;
var nStarSlider;
var stampSelect;

//Call the function for the stamptool. This function will be called in setup of sketch.js of the toolbox
//START
function StampTool() {
    this.name = "stampTool";
    this.icon = "assets/stamp.jpg";

     //set the populateOptions function to contain the sliders at the bottom div and the stamp options
    this.populateOptions = function() {
        select(".options").html(
            "<div>Select Stamp</div>" +
            "<div id='stampSelectControl'></div>" +
            "<div>Stamp Size</div>" +
            "<div id='sizeOfStampControl'></div>" +
            "<div>Number of Stamps</div>" +
            "<div id='numberOfStampsControl'></div>"
        );

        // Create a dropdown to select different stamps
        stampSelect = createSelect();
        stampSelect.option('Star');
        stampSelect.option('Bow');
        stampSelect.option('Cherry');
        stampSelect.parent("#stampSelectControl");

        // Set the default selected image
        stampSelect.changed(() => {
            if (stampSelect.value() === 'Bow') {
                currentStamp = bow;
            } else if (stampSelect.value() === 'Cherry') {
                currentStamp = cherry;
            } else { // Defaults to 'Star'
                currentStamp = star;
            }
        });

        // Create the slider to control the size of the stamps
        starSizeSlider = createSlider(5, 50, 20);
        starSizeSlider.parent("#sizeOfStampControl");

        // Create the slider to control the number of stamps shown
        nStarSlider = createSlider(1, 20, 5);
        nStarSlider.parent("#numberOfStampsControl");
    };

//To ensure that when another tool is pressed, the stamptool otpions dont stay
    this.unselectTool = function() {
        select(".options").html("");
    };

//END
//calls the draw function
    this.draw = function() {
        //if mouse is pressed, it allows for the star image to be placed in the area where the mouse is (according to x and y coordinates)
        if (mouseIsPressed && currentStamp) {
            for (var i = 0; i < nStarSlider.value(); i++) {
                var stampSize = starSizeSlider.value();
                var stampX = random((mouseX - stampSize / 2) - 10, (mouseX - stampSize / 2) + 10);
                var stampY = random((mouseY - stampSize / 2) - 10, (mouseY - stampSize / 2) + 10);
                image(currentStamp, stampX, stampY, stampSize, stampSize);
            }
        }
    };
}

////////////////COLOUR PICKER TOOL////////////////
// Displays and handles the colour palette.
function ColourPicker() {
    //make the start colour be black
    this.selectedColour = "black";

    var self = this;

    var colourClick = function() {

        // Get the new colour from the color input value. No need for "swatch"
        var c = this.value();
        
        // Set the selected colour and fill and stroke
        self.selectedColour = c;
        fill(c);
        stroke(c);
    };

//START
    // Load the color palette
    this.loadColours = function() {
        // Set the fill and stroke properties to be black at the start of the programme running
        fill(this.selectedColour);
        stroke(this.selectedColour);

        // Create a color input element
        var colorInput = createInput("rgb(0,0,0)", "color");
        colorInput.class("colourPicker");
        
        select(".colourPicker").child(colorInput);
        colorInput.input(colourClick);

    };

    // Call the loadColours function now it is declared
    this.loadColours();
}

//END
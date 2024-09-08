////////// TEXT TOOL //////////

//START
function TextTool() {
    this.icon = "assets/text.jpg"; 
    this.name = "text";
    
    // Variables for text size slider and text input
    var textSizeSlider;
    var textInput;

    // Add options for text tool
    this.populateOptions = function() {
        select(".options").html(
            "<div>Text Size</div>" +
            "<div id='textSizeControl'></div>" +
            "<div>Enter Text</div>" +
            "<div id='textInputControl'></div>"
        );
        
        // Create the text size slider
        textSizeSlider = createSlider(10, 100, 32); 
        textSizeSlider.parent(select("#textSizeControl"));

        // Create the text input field
        textInput = createInput('');
        textInput.parent(select("#textInputControl"));
    };

    // Clear the options when switching tools
    this.unselectTool = function() {
        select(".options").html("");
    };

    // Text tool draw function
    this.draw = function() {
        // Get the value of the text size slider
        var textSizeValue = textSizeSlider.value();
        // Get the text from the input field
        var textValue = textInput.value();
        
        textSize(textSizeValue);

        // Draw the text at the current mouse position when the mouse is pressed over that particular area
        if (mouseIsPressed) {
            text(textValue, mouseX, mouseY);
        }
    };
}

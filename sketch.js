//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var star, bow, cherry, currentStamp;

function preload() {
    star = loadImage('./assets/star.png');
    bow = loadImage('./assets/bow.png');
    cherry = loadImage('./assets/cherry.png');
    currentStamp = star; // Default stamp
}
    
function setup() {

    //create a canvas to fill the content div from index.html
    var canvasContainer = select('#content');
    var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    c.parent("content");
    //create helper functions and the colour palette
    helpers = new HelperFunctions();
//START
    colourP = new ColourPicker();
//END

    //create a toolbox for storing the tools
    toolbox = new Toolbox();

    //add the tools to the toolbox.
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
//START
    toolbox.addTool(new StampTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new EraserTool());
    toolbox.addTool(new KaleidoscopeTool());
    background(255);
//ENDS

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
    if (toolbox.selectedTool.hasOwnProperty("draw")) {
        toolbox.selectedTool.draw();
    } else {
        alert("it doesn't look like your tool has a draw method!");
    }
}
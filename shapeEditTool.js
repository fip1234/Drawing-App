function ShapeEditTool() {
    this.icon = "assets/edit.jpg";
    this.name = "ShapeEdit";

    var editMode = false;
    var currentShape = [];
    var canvas;

    // Initialize the tool
    this.setup = function(c) {
        canvas = c; // Set the canvas
        noFill();
        loadPixels();
    };

    // Populate the options area with buttons
    this.populateOptions = function() {
        select(".options").html(""); // Clear existing options

        // Create and set up the Edit Shape button
        var editButton = createButton('Edit Shape');
        editButton.parent(select(".options")); // Add the button to the options area
        editButton.mousePressed(function() {
            editMode = !editMode;
            editButton.html(editMode ? "Add Vertices" : "Edit Shape");
        });

        // Create and set up the Finish Shape button
        var finishButton = createButton('Finish Shape');
        finishButton.parent(select(".options")); // Add the button to the options area
        finishButton.mousePressed(function() {
            editMode = false;
            this.draw(); // Finalize the shape
            loadPixels();
            currentShape = [];
        }.bind(this)); // Use .bind(this) to ensure the correct context
    };

    // Ensure the options are cleared when the tool is unselected
    this.unselectTool = function() {
        updatePixels();
        select(".options").html(""); // Clear options
    };

    // Draw the shape on the canvas
    this.draw = function() {
        updatePixels();
        if (mouseIsPressed && mousePressOnCanvas()) {
            if (!editMode) {
                currentShape.push({ x: mouseX, y: mouseY });
            } else {
                for (var i = 0; i < currentShape.length; i++) {
                    if (dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15) {
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        }

        beginShape();
        for (var i = 0; i < currentShape.length; i++) {
            strokeWeight(2)
            stroke('black')
            vertex(currentShape[i].x, currentShape[i].y);
            if (editMode) {
                fill('red');
                ellipse(currentShape[i].x, currentShape[i].y, 10);
                noFill();
            }
        }
        endShape();
    };

    // Define if the mouse is pressed on the canvas
    function mousePressOnCanvas() {
        return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
    }
}

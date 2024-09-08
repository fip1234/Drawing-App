function ShapeEditTool() {
    this.icon = "assets/edit.jpg";
    this.name = "ShapeEdit";

    var editMode = false;
    var currentShape = [];
    var canvas;
    var lineTypeSelect; // Dropdown to select line type

    // Initialize the tool
    this.setup = function(c) {
        canvas = c; // Set the canvas
        noFill();
        loadPixels();
    };

    // Populate the options area with buttons and a dropdown for line type
    this.populateOptions = function() {
        select(".options").html(""); // Clear existing options

        // Create and set up the Edit/Add Vertices button 
        var self = this; 
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
            editButton.html("Edit Shape"); // Reset edit button text
            self.draw(); // Finalize the shape
            loadPixels();
            currentShape = [];
        });

        // Create a dropdown to select between Straight and Dashed Lines
        lineTypeSelect = createSelect();
        lineTypeSelect.option('Straight Line');
        lineTypeSelect.option('Dashed Line');
        lineTypeSelect.parent(select(".options"));
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
                // Add vertices if not in edit mode
                currentShape.push({ x: mouseX, y: mouseY });
            } else {
                // Edit existing vertices in edit mode
                for (var i = 0; i < currentShape.length; i++) {
                    if (dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15) {
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        }

        // Render the shape
        var lineType = lineTypeSelect.value();  // Either 'Straight Line' or 'Dashed Line'
        strokeWeight(2);
        stroke('black');

        if (currentShape.length > 0) {
            beginShape();
            for (var i = 0; i < currentShape.length; i++) {
                vertex(currentShape[i].x, currentShape[i].y);

                // Show red circles on vertices in edit mode
                if (editMode) {
                    fill('red');
                    ellipse(currentShape[i].x, currentShape[i].y, 10);
                    noFill();
                }
            }
            endShape();

            // Draw dashed lines if selected
            if (lineType === 'Dashed Line') {
                strokeWeight(2);
                drawingContext.setLineDash([5,15]); // Call setLineDashed if it's a dashed line
            }
        }
    };

    // Change offset values from UoL example to mouseX and mouseY
    function mousePressOnCanvas() {
        return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
    }
}

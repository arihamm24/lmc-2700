let toolBar;

let mainGrid;
let mainCellSize = 40;

let scrollAmount = 20;

let backgroundColor;

function setup() {
  createCanvas(800, 600);
  
  backgroundColor = color(20, 200, 20);
  
  toolBar = new ToolBar(new Vector3(10, height - 130), 
                        new Vector3(width - 20, 120));
  
  mainGrid = new Grid(30, 30, mainCellSize);
}

function draw() {
  background(backgroundColor);
  
  mainGrid.display();
  
  toolBar.display();
}


function keyPressed() {
  //Shifting
  if (keyCode == LEFT_ARROW) {
    mainGrid.scroll(Vector3.left(scrollAmount));
  } 
  
  if (keyCode == RIGHT_ARROW) {
    mainGrid.scroll(Vector3.right(scrollAmount));
  } 
  
  if (keyCode == UP_ARROW) {
    mainGrid.scroll(Vector3.up(scrollAmount));
  } 
  
  if (keyCode == DOWN_ARROW) {
    mainGrid.scroll(Vector3.down(scrollAmount));
  }
  
  // Zooming
  if (keyCode == 187) {
    mainGrid.zoom(0.1);
  }
  
  if (keyCode == 189) {
    mainGrid.zoom(-0.1);
  }
}

function mousePressed() {
  // Toolbar interaction
  if (toolBar.clicked()) {
    let chosenCategory = toolBar.getClickedOption(mouseX, mouseY);
    print(chosenCategory);
    return;
  }
  
  // Grid interaction
  let cellClicked = mainGrid.getIndex(mouseX, mouseY);
  
  if (cellClicked < 0) {
    return;
  }
    
  mainGrid.cells[cellClicked].isEmpty = false;
}
let sprites = {
  SOLAR_FARM: null
};

let toolBar;

let mainGrid;
let mainCellSize = 100;

let scrollAmount = 20;

let backgroundColor;

function setup() {
  createCanvas(800, 600);
  
  backgroundColor = color(20, 200, 20);

  sprites.SOLAR_FARM = loadImage('/Sprites/SolarFarm.png');
  
  toolBar = new ToolBar(new Vector3(10, height - 130), 
                        new Vector3(width - 20, 120));
  
  mainGrid = new Grid(8, 5, mainCellSize);
}

function draw() {
  background(backgroundColor);

  mainGrid.display();
  
  toolBar.display();
}


function keyPressed() {
  // Shifting
  // Key code for A
  if (keyCode == 65) {
    mainGrid.scroll(Vector3.left(scrollAmount));
  } 
  
  // Key code for D
  if (keyCode == 68) {
    mainGrid.scroll(Vector3.right(scrollAmount));
  } 
  
  // Key code for W
  if (keyCode == 87) {
    mainGrid.scroll(Vector3.up(scrollAmount));
  } 
  
  // Key code for S
  if (keyCode == 83) {
    mainGrid.scroll(Vector3.down(scrollAmount));
  }
  
  // Zooming
  // Key code for +/= key
  if (keyCode == 187) {
    mainGrid.zoom(0.1);
  }
  
  // Key code for - key
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

  switch (toolBar.currentPlacingMode) {
    case "Solar":
      mainGrid.cells[cellClicked].placeObject(new PowerPlant("Solar"));
      break;
  }
}
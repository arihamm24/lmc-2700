let sprites = {
  HOUSE: null,
  SOLAR_FARM: null,
  LIBRARY: null,
  FLOWER: null,
  RUNDOWN_HOUSE: null,
  POWER_PLANT: null,
  RUNDOWN_LIBRARY: null,
  WILTED_FLOWER: null
};

let score = 20;

let toolBar;

// Grid Variables
let mainGrid;
let mainCellSize = 80;
let scrollAmount = 30;

let backgroundColor;

function setup() {
  createCanvas(800, 600);
  
  backgroundColor = color(20, 200, 20);

  // Load sprites
  sprites.SOLAR_FARM = loadImage('/Sprites/SolarFarm.png');
  sprites.POWER_PLANT = loadImage('/Sprites/CoalPowerPlant.png');
  sprites.HOUSE = loadImage('/Sprites/House.png');
  sprites.RUNDOWN_HOUSE = loadImage('/Sprites/HouseRundown.png');
  sprites.LIBRARY = loadImage('/Sprites/Library.png');
  sprites.RUNDOWN_LIBRARY = loadImage('/Sprites/LibraryRundown.png');
  sprites.FLOWER = loadImage('/Sprites/Flower.png');
  sprites.WILTED_FLOWER = loadImage('/Sprites/WiltedFlower.png');


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
    let chosenOption = toolBar.getClickedOption(mouseX);
    
    if (chosenOption != null) {
      toolBar.setPlacingMode(chosenOption);
    }

    return;
  }
  
  // Ignore click if no placing mode selected.
  if (toolBar.currentPlacingMode === null) return;

  // Grid interaction
  let cellClicked = mainGrid.getIndex(mouseX, mouseY);
  
  // Ignore click if the cell index is invalid, or 
  if (cellClicked < 0 || !mainGrid.cells[cellClicked].isEmpty) {
    return;
  }

  switch (toolBar.currentPlacingMode) {
    case "House":
      mainGrid.cells[cellClicked].placeObject(new House());
      break;
    case "Power Plant":
      mainGrid.cells[cellClicked].placeObject(new PowerPlant());
      break;
    case "Library":
      mainGrid.cells[cellClicked].placeObject(new Library());
      break;
    case "Flower":
      mainGrid.cells[cellClicked].placeObject(new Flower());
  }
}
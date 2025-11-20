/*
Index 0 represents the category.
*/
const placingModes = ["House", "Power Plant", "Library", "Flower"];

/*
Still a proof of concept, but the goal is to have a toolbar
that allows you to switch between categories and choose 
options from the categories to set the placing mode.
*/
class ToolBar {
  constructor(position, size) {
    this.position = position;
    this.size = size;
    this.optionSize = 60;
    this.currentPlacingMode = null;

    this.setToolBar();
  }
  
  display() {
    // Tool bar
    push();
    fill(0, 200);
    rect(this.position.x, this.position.y, 
         this.size.x, this.size.y, 8);
    pop();
    
    // Display all placing options
    for (let i = 0; i < placingModes.length; i++) {
      let option = placingModes[i];
      let position = this.optionPositions[i];

      // If the score is less than 50, then index the rundown version.
      let index = score >= 50 ? i : i + 4;

      let sprite = Object.values(sprites)[index];

      push();
      image(sprite, position.x, position.y, this.optionSize, this.optionSize);

      fill(220);
      text(option, position.x, position.y + this.optionSize + 15);

      // If displaying the current placing mode, then highlight it.
      if (placingModes[i] === this.currentPlacingMode) {
        noFill();
        stroke(220);
        square(position.x, position.y, this.optionSize);
      }
      pop();
    }    
  }
  
  /*
  Sets the option positions.
  */
  setToolBar() {
    this.optionPositions = new Array(placingModes.length - 1);
    
    let y = this.position.y + this.optionSize / 2;
    
    let spacing = (this.size.x) / (placingModes.length + 1);
    
    for (let i = 0; i < placingModes.length; i++) {
      let x = this.position.x + spacing * (i + 1);
      
      this.optionPositions[i] = new Vector3(x - this.optionSize / 2, y);
    }
  }
  
  /*
  Returns whether the toolbar was clicked.
  */
  clicked() {
    let withinX = mouseX > this.position.x && 
        mouseX < this.position.x + this.size.x;
    let withinY = mouseY > this.position.y &&
        mouseY < this.position.y + this.size.y;
    
    return withinX && withinY;
  }
  
  /*
  Returns the clicked option.
  */
  getClickedOption(x) {
    for (let i = 0 ; i < placingModes.length; i++) {
      let option = this.optionPositions[i];

      let withinX = x > option.x && x < option.x + this.optionSize;

      if (withinX) return placingModes[i];
    }
  }

  setPlacingMode(option) {
    this.currentPlacingMode = option;
  }
}

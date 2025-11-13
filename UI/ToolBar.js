/*
Index 0 represents the category.
*/
const categories = {
  PATHS: ["Paths", "Road", "Bike Path"],
  HOUSING: ["Housing", "House"],
  EDUCATION: ["Education", "School"],
  POWER_PLANTS: ["Power Plants", "Solar"]
};


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
    this.setCurrentCategory(categories.PATHS);
    
    this.currentPlacingMode = null;
  }
  
  display() {
    push();
    fill(0, 200);
    rect(this.position.x, this.position.y, 
         this.size.x, this.size.y, 8);
    pop();
    
    /*
    Add display for categories.
    */
    
    if (this.currentCategory == null) return;
    
    for (let i = 0; i < this.numOptions; i++) {
      let option = categories.PATHS[i + 1];
      let position = this.optionPositions[i];
      
      push();
      fill(220);
      square(position.x, position.y, this.optionSize);
      stroke(220);
      text(option, position.x, position.y + this.optionSize + 15);
      pop();
    }    
  }
  
  /*
  Sets the category, and option positions based on the
  number of options in the category.
  */
  setCurrentCategory(category) {
    this.currentCategory = category;
    
    this.numOptions = this.currentCategory.length - 1;
    this.optionPositions = new Array(this.numOptions - 1);
    
    let y = this.position.y + this.optionSize / 2;
    
    let spacing = (this.size.x) / (this.numOptions + 1);
    
    for (let i = 0; i < this.numOptions; i++) {
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
  Will determine which option was clicked, and return its value.
  */
  getClickedOption(x, y) {
    
  }
  
  /*
  Will determin which category was clicked, and return its value.
  */
  getClickedCategory(x, y) {
    
  }
}

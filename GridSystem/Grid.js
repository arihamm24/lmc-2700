/*
Grid Class holds a one dimensional array of cells, 
along with the number of collumns, rows, and the size of each cell.
*/
class Grid {
  constructor(numCols, numRows, cellSize) {
    // Treat as constants:
    this.numCols = numCols;
    this.numRows = numRows;
    this.cellSize = cellSize;
    this.cells = new Array(numCols * numRows);
    
    for (let i = 0; i < numCols * numRows; i++) {
      let x = floor(i % numCols) * cellSize;
      let y = floor(i / numCols) * cellSize;
      
      let position = new Vector3(x, y);
      this.cells[i] = new Cell(position, this, i);
    }
    
    // Transforms: 
    let xInitialOffset = width / 2 - numCols * cellSize / 2;
    let yInitialOffset = height / 2 - numRows * cellSize / 2;

    this.offset = new Vector3(xInitialOffset, yInitialOffset);
    this.gridScale = 1;  
    
    // Properties:
    
  }
  
  /*
  We can use this to move the grid by editing offset,
  allowing us to scroll through the grid.
  */
  scroll(direction) {
    this.offset = this.offset.add(direction);
  }
  
  /*
  Scales the grid to zoom in or out by editing the scale.
  */
  zoom(amount) {
    if (this.gridScale + amount < 0.5) {
      this.gridScale = 0.5;
      return;
    }
    
    if (this.gridScale + amount > 2) {
      this.gridScale = 2;
      return;
    }
    
    this.gridScale += amount;
  }
  
  /*
  Calculates the index based on a given x and y.
  */
  getIndex(x, y) {
    let offsetX = (x - this.offset.x) / this.gridScale;
    let offsetY = (y - this.offset.y) / this.gridScale;
    
    let xIndex = floor(offsetX / this.cellSize);
    let yIndex = floor(offsetY / this.cellSize);
    
    let insideX = xIndex > 0 && xIndex < this.numCols;
    let insideY = yIndex > 0 && yIndex < this.numRows;
    let insideBounds = insideX && insideY;
    
    if (!insideBounds) return -1;
    
    return yIndex * this.numCols + xIndex;
  }
  
  /*
  Displays each cell based on if its empty or not.
  
  As we add more functionality to each cell we can add to this.
  */
  display() {
    for (let i = 0; i < this.cells.length; i++) {
      // Safeguard against draw loop starting before setup finishes.
      if (this.cells[i] == null) break;
      
      let cellPos = this.cells[i].position.multiply(this.gridScale);
      cellPos = cellPos.add(this.offset);
      let cellIsEmpty = this.cells[i].isEmpty;
      let scaledSize = this.cellSize * this.gridScale
      
      push();
      noFill();
      square(cellPos.x, cellPos.y, scaledSize);
      pop();

      if (!cellIsEmpty) {
        this.cells[i].heldObject.display(cellPos, scaledSize);
      }
    }
  }
}

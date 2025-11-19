const cellOffsets = [
  new Vector3(0, -1),
  new Vector3(-1, 0),
  new Vector3(1, 0),
  new Vector3(0, 1),
];

/*
Parent class for all paths. Should be treated as an abstract class.
*/
class Path {
  constructor(holdingCell, diameter) {
    this.holdingCell = holdingCell;
    this.diameter = diameter;

    this.connectingCells = [];
    this.findConnectingCells();
  }

  findConnectingCells() {
    let gridCollumns = this.holdingCell.holdingGrid.numCols;
    let centerIndex = this.holdingCell.gridIndex;

    console.log(centerIndex);

    for (let offset of cellOffsets) {
      let index = offset.y * gridCollumns + offset.x + centerIndex;
      let cellToCheck = this.holdingCell.holdingGrid.cells[index];

      if (!(cellToCheck instanceof Cell) || cellToCheck.isEmpty) 
        continue;

      if (cellToCheck.heldObject instanceof Path)
        this.connectingCells.push(index);
    }
  }

  display() {
    if (this.holdingCell == null) return;

    let position = this.holdingCell.position;
    let offset = this.holdingCell.holdingGrid.cellSize / 2;

    push();

    fill(150);
    circle(position.x + offset, position.y + offset, this.diameter);
    if (this.connectingCells.length != 0) {
      for (let connection of this.connectingCells) {
        let connectingCell = this.holdingCell.holdingGrid[connection];
        
      }
    }
    pop();
  }
}

class Road extends Path {
  constructor(holdingCell, lanes, hasSidewalk = false) {
    super(holdingCell, 10 * lanes * 2);

    this.lanes = lanes;
    this.hasSidewalk = hasSidewalk;
  }
}

class BikePath extends Path {
  constructor(holdingCell) {
    super(20);
  }
}

function pathBuilder (ankorPosition) {

}
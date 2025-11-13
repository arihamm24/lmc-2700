const cellOffsets = [
  new Vector3(-1, -1),
  new Vector3(0, -1),
  new Vector3(1, -1),
  new Vector3(-1, 0),
  new Vector3(1, 0),
  new Vector3(-1, 1),
  new Vector3(0, 1),
  new Vector3(1, 1)
];

/*
Parent class for all paths. Should be treated as an abstract class.
*/
class Path {
  constuctor(holdingCell, diameter) {
    this.holdingCell = holdingCell;
    this.diameter = diameter;

    this.connectingCells = [];
    findConnectingCells();
  }

  findConnectingCells() {
    let gridCollumns = holdingCell.holdingGrid.numCols;

    for (let offset of cellOffsets) {
      let index = offset.y * gridCollumns + offset.x;
      let cellToCheck = this.holdingCell.holdingGrid.cells[index];

      if (cellToCheck.isEmpty) continue;

      if (cellToCheck.heldObject instanceof Path) {
        this.connectingCells.push(index);
      }
    }
  }
}

class Road extends Path {
  constructor(lanes, hasSidewalk = false) {
    super(10 * lanes * 2);
    this.lanes = lanes;
    this.hasSidewalk = hasSidewalk;
  }
}

class BikePath extends Path {
  constructor() {
    super(20);
  }
}

function pathBuilder (ankorPosition) {

}
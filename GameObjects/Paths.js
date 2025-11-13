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
  }

  findConnectingCell() {
    let gridCollumns = holdingCell.holdingGrid.numCols;
    for (let offset of cellOffsets) {
      
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
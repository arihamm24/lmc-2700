/*
Parent class for all paths. Should be treated as an abstract class.
*/
class Path {
  constuctor(diameter) {
    this.diameter = diameter;

    this.connectingCells = [];
  }
}

class Road extends Path {
  constructor(lanes, hasSidewalk = false) {
    super(10 * lanes * 2);
    this.lanes = lanes;
    this.hasSidewalk = hasSidwalk;
  }
}

class BikePath extends Path {
  constructor() {
    super(20);
  }
}

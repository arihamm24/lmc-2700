/*
Parent class for buildings. Should be treated as an abstract class.

Variables that could be added:
- sustaiability: could be used to measure how sustainable the city is.
- 
*/
class GameObject {
  constructor(quality, sprite) {
    this.holdingCell = null;
    this.quality = quality;
    this.sprite = sprite;
  }

  display(cellPosition, cellSize) {
    if (this.holdingCell == null) return;

    image(this.sprite, cellPosition.x, cellPosition.y, cellSize, cellSize);
  }
}

/*
These are just proofs of concepts.

Feel free to do whatever with these.
*/

// We should have powerplants for all types of power sources.
class PowerPlant extends GameObject {
  constructor(powerSource) {
    super(10, sprites.SOLAR_FARM);
    this.powerSource = powerSource;
  }
}

class House extends GameObject {
  constructor(floors) {
    super(max(1, floors) * 2, max(1, floors) * 50000);
    this.floors = floors;
  }
}

class School extends GameObject {
  constructor(classrooms) {
    super(max(5, classrooms) * 20, max(5, classrooms) * 100000);
    this.classrooms = classrooms;
  }
}

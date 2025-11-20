/*
Parent class for buildings. Should be treated as an abstract class.

Variables that could be added:
- sustaiability: could be used to measure how sustainable the city is.
- 
*/
class GameObject {
  constructor(sprite) {
    this.holdingCell = null;
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
  constructor() {
    super(sprites.SOLAR_FARM);
  }
}

class House extends GameObject {
  constructor() {
    super(sprites.HOUSE);
  }
}

class Library extends GameObject {
  constructor() {
    super(sprites.LIBRARY);
    print(sprites.Library);
  }
}

class Flower extends GameObject {
  constructor() {
    super(sprites.FLOWER);
  }
}
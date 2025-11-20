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
    super(score >= 50 ? sprites.SOLAR_FARM : sprites.POWER_PLANT);
  }
}

class House extends GameObject {
  constructor() {
    super(score >= 50 ? sprites.HOUSE : sprites.RUNDOWN_HOUSE);
  }
}

class Library extends GameObject {
  constructor() {
    super(score >= 50 ? sprites.LIBRARY : sprites.RUNDOWN_LIBRARY);
    print(sprites.Library);
  }
}

class Flower extends GameObject {
  constructor() {
    super(score >= 50 ? sprites.FLOWER : sprites.WILTED_FLOWER);
  }
}
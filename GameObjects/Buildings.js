/*
Parent class for buildings. Should be treated as an abstract class.

Variables that could be added:
- sustaiability: could be used to measure how sustainable the city is.
- 
*/
class Building {
  constructor(capacity, price) {
    this.capacity = capacity;
    this.price = price;
    
    this.connectingCells = [];
  }
}

/*
These are just proofs of concepts.

Feel free to do whatever with these.
*/

// We should have powerplants for all types of power sources.
class PowerPlant extends Building {
  constructor(powerSource) {
    super(50, 500000);
    this.powerSource = powerSource;
  }
}

class House extends Building {
  constructor(floors) {
    super(max(1, floors) * 2, max(1, floors) * 50000);
    this.floors = floors;
  }
}

class School extends Building {
  constructor(classrooms) {
    super(max(5, classrooms) * 20, max(5, classrooms) * 100000);
    this.classrooms = classrooms;
  }
}

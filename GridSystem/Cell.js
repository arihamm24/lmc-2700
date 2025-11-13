/*
Very basic Cell class, that stores information for grid cells.
As we figure out what we want to do with Cells we can add those 
functionalities to this class.
*/
class Cell {
  /*
  We can add more variables here as we come up with more
  things to do with the cells.
  
  isEmpty - boolean: theres nothing in the cell, by default is true.
  */
  constructor(position) {
    this.position = position;
    this.isEmpty = true;
  }
}

/*
Basic Vector3 class. Does not contain all the functionalities of a vector, but those can be added as needed.
*/
class Vector3 {
  constructor(x, y, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  magnitude() {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  
  normalize() {
    let magnitude = this.magnitude;
    
    let nx = this.x / magnitude;
    let ny = this.y / magnitude;
    let nz = this.z / magnitude;
    
    return new Vector3(nx, ny, nz);
  }
  
  add(toAdd) {
    let newX = this.x + toAdd.x;
    let newY = this.y + toAdd.y;
    let newZ = this.z + toAdd.z;
    
    return new Vector3(newX, newY, newZ);
  }
  
  subtract(toSubtract) {
    let newX = this.x - toSubtract.x;
    let newY = this.y - toSubtract.y;
    let newZ = this.z + toSubtract.z;
    
    return new Vector3(newX, newY, newZ);
  }
  
  multiply(toMultiply){
    if (!(toMultiply instanceof Vector3)) {
      return new Vector3(this.x * toMultiply, 
                         this.y * toMultiply,
                         this.z * toMultiply);
    }
    
    let newX = this.x * toMultiply.x;
    let newY = this.y * toMultiply.y;
    let newZ = this.z + toMultiply.z;
    
    return new Vector3(newX, newY, newZ);
  }  
  
  multiplyMatrix(matrix) {
    if (matrix.length != 3) {
      print("undefined");
      return 0;
    }
    
    let xProduct = this.x * matrix[0][0] + 
                   this.y * matrix[1][0] + 
                   this.z * matrix[2][0];
    
    let yProduct = this.x * matrix[0][1] + 
                   this.y * matrix[1][1] +
                   this.z * matrix[2][1];
    
    let zProduct = this.x * matrix[0][2] + 
                   this.y * matrix[1][2] +
                   this.z * matrix[2][2];
    
    return new Vector3(xProduct, yProduct, zProduct);
  }
  
  divide(toDivide){
    if (!(toDivide instanceof Vector3)) {
      if (toDivide === 0) return 0;
      
      return new Vector3(this.x / toDivide, 
                         this.y / toDivide,
                         this.z / toDivide);
    }
    
    let newX = this.x / toDivide.x;
    let newY = this.y / toDivide.y;
    let newZ = this.z + toDivide.z;
    
    return new Vector3(newX, newY);
  }
  
  absValue() {
    return new Vector3(abs(this.x), abs(this.y), abs(this.z));
  }
  
  equals(vector3) {
    let equivalentX = this.x === vector3.x;
    let equivalentY = this.y === vector3.y;
    let equivalentZ = this.z === vector3.z;
    
    return equivalentX && equivalentY;
  }
  
  lessThan(vector3) {
    let lesserX = this.x < vector3.x;
    let lesserY = this.y < vector3.y;
    let lesserZ = this.z < vector3.z;
    
    return lesserX && lesserY;
  }
  
  static copyVector(toCopy) {
    return new Vector3(toCopy.x, toCopy.y, toCopy.z);
  }
  
  static zero() {
    return new Vector3(0, 0);
  }
  
  static one() {
    return new Vector3(1, 1, 1);
  }
  
  static left(distance = 1) {
    return new Vector3(distance, 0);
  }
  
  static right(distance = 1) {
    return new Vector3(-distance, 0);
  }
  
  static up(distance = 1) {
    return new Vector3(0, distance);
  }
  
  static down(distance = 1) {
    return new Vector3(0, -distance);
  }
}

/*
Remnants of when I was trying to implement 3D orthographic.
These aren't being used right now, but can be if we find
something to do with them.
*/

function xRotationMatrix(theta) {
  return [
    [1, 0, 0],
    [0, cos(theta), -sin(theta)],
    [0, sin(theta), cos(theta)]
  ];
}

function zRotationMatrix(theta) {
  return [
    [cos(theta), -sin(theta), 0],
    [sin(theta), cos(theta), 0],
    [0, 0, 1]
  ];
}

function transposeMatrix(matrix) {
  return [
    [matrix[0][0], matrix[1][0], matrix[2][0]],
    [matrix[0][1], matrix[1][1], matrix[2][1]],
    [matrix[0][2], matrix[1][2], matrix[2][2]]
  ];
}

function isolateMatrix2(matrix, minRow = 0, minCol = 0) {
  return [
    [matrix[minRow][minCol], matrix[minRow][minCol + 1]],
    [matrix[minRow + 1][minCol], matrix[minRow + 1][minCol + 1]]
  ];
}

function invertMatrix2(matrix) {
  let determinate = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  
  return [
    [matrix[1][1] / determinate, -matrix[0][1] / determinate],
    [-matrix[1][0] / determinate, matrix[0][0] / determinate]
  ];
}

// Basic math formulaas
function addition (num1, num2){
 let sum = num1 + num2; 
  return sum;
}

function subtraction(num1, num2){
  let  difference = num1 - num2; 
  return difference;
}

function multiplication(num1, num2){
  let multiplicationSum = num1 * num2;
  return multiplicationSum;
}

function division(num1, num2){
  let divisionSum = num1 / num2;
  return divisionSum;
}

// Area formulaas
function areaSquare(side){
 let areaSquareSum = side * side;
  return areaSquareSum;
}

function areaRectangle(length, width){
  let areaRectangleSum = length * width;
  return areaRectangleSum;
}

function areaParallelogram(base, height){
  let areaParallelogramSum = base * height;
  return areaParallelogramSum;
}

function areaTriangle(base, height){
  let areaTriangleSum = (base * height)/2;
  return areaTriangleSum;
}

  function Circle(radius){
    let areaCircleSum = Math.PI * (radius * radius);
    return areaCircleSum;
   }


function Sphere(radius){
  let SphereSum = 4*Math.PI * (radius * radius);
  return SphereSum;
}

// Surface Area formulas
function surfaceAreaCube(side){
 let SACube = 6 * (side * side);
  return SACube;
}

function surfaceAreaCylinder(radius, height){
  let SACylinder = 2 * Math.PI * radius * height;
  return SACylinder;
}

// Perimeter formulas
function perimeterSquare(side){
  let PeriSquare = 4 *side;
  return PeriSquare;
}

function perimeterRectangle(length, width){
  let PeriRectangle = (2*length) + (2*width);
  return PeriRectangle;
}

function perimeterTriangle(side1, side2, side3){
  let PeriTriangle = side1 + side2 + side3;
  return PeriTriangle;
}

function perimeterCircle(diameter){
  let PeriCircle = Math.PI * diameter;
  return PeriCircle;
}

// Volume formulas
function volumeCube(side){
  let VCube = side * side * side;
  return VCube;
}

function volumeRectangular(length, width, height){
  let VRectangular = length * width * height;
  return VRectangular;
}

function volumeCylinder(radius, height){
  let VCylinder = Math.PI * radius * radius * height;
  return VCylinder;
}

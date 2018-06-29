// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />


var clicks = 10;
var keys = 10;
var time = 0;
var timespeed = 1;
var myHue = 0;

function setup() {
  createCanvas(4000, 4000);
  angleMode(DEGREES);
  colorMode(HSB, 100);
}

function draw() { 
  time = time + timespeed;  
  var ellipseOffset = time % 4000;
  var myHue = time % 50;

if (ellipseOffset > 2000) {
background("red");
} else {
background(myHue, 100, 100);
}


  if (keyIsPressed) {
    timespeed = 5;
  } else {
    timespeed = 1;
  }

  ///stroke("pink");
  fill("black");

  ellipse(ellipseOffset, 200, clicks * 10, clicks * 10);
  ellipse(300, 300, clicks * 10, clicks * 10);
}

function mouseReleased() {
  clicks = clicks + 1;
}

function keyReleased() {
  keys = keys + 1;
} 
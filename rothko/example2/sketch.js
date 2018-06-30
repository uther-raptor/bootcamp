// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var meals = ["🗯️", "🇷🇺", "🥓", "🔪", "🔫", "🐖", "🏋️‍♂️"];
var currentMeal = null;
var currentMealPos = 0;
var saturated = 100;
var time = 2;
var myColor = "black";

function setup() {
  createCanvas(1920, 1080);
  colorMode(HSB, 100);
}

function draw() {
  time = time -1
 clear();
  if (time % 100 == 0) {
 myColor = color(random(0, 100), 100, 100);

  }

  if (currentMeal == null) {
    currentMeal = meals[Math.floor(Math.random()*meals.length)];
    currentMealPos = 0;
  } else {
    if (currentMealPos > 885) {
      currentMeal = meals[Math.floor(Math.random()*meals.length)];
      currentMealPos = 0;
      saturated = saturated + 10;
    } else {
      currentMealPos = currentMealPos + 5;
    }
  }

  document.body.style.backgroundImage = "url('https://i.imgur.com/wB5iDAr.png')"; 


  textSize(120);
  textAlign(CENTER);


  text(currentMeal, 1010, currentMealPos);
  textSize(saturated + 20);

  text("🤬", 1010, 885);

}


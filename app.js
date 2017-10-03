"use strict";

//make an object
//randomly display one picture
//listener, sometjomg tl click on

var random = function(min, max){
  return( Math.round(Math.random() * (max - min) + min));
};

var itemPool = [];

var recentPool1 = [];

var recentPool2 = [];

function item(name,filepath){
  // check for duplicate name here!
  this.name = name;
  this.filepath = filepath;
  this.seen = 0;
  this.clicked = 0;
  itemPool.push(this);
}

new Image('Bag','resources/bag.jpg');
new Image('Bananna','resources/bananna.jpg');
new Image('Bathroom','resources/bathroom.jpg');
new Image('Bendycharge','resources/bendcharge.jpg');
new Image('Breakfast','resources/breakfast.jpg');
new Image('Bubblegum','resources/bubblegum.jpg');

var game = document.getElementById('game');
var slot1 = document.getElementById('slot1');
var slot2 = document.getElementById('slot2');
var slot3 = document.getElementById('slot3');

for(i = 1; i > 0; i--) {
  // get a random element
  var itemIndex = random(0,itemPool.length);
  var item = itemPool[itemIndex];
  var recentMatch = false;
  for(n = 0; n < recentPool1.length; n++) {
    if(item[name] === recentPool1[n]) {
      recentMatch = true;
      break;
    };
  };
  if(!recentMatch) {
    for(n = 0; n < recentPool2.length; n++) {
      if(item[name] === recentPool2[n]) {
        recentMatch = true;
        break;
      };
    };
  };
  if(recentMatch) {
    console.log(item[name] + 'has been used too recently.');
  } else {
    //slot name?
    slot1.src = itemPool.itemIndex.filepath

    break;
  };
};

//listener should listen for click on any of the three slots, from there I can grab the item name and trigger the frefresh.

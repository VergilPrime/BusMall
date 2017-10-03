'use strict';

console.log( 'Defining the random function' );
var random = function(min, max){
  return( Math.round(Math.random() * (max - min) + min));
};

console.log( 'Item.pool is where all the created Items will go.' );
Item.pool = [];

console.log( 'Item.recentPool1 is where Items already displayed currently go.' );
Item.recentPool1 = [];

console.log( 'Item.recentPool2 is where Items displayed last roll go.' );
Item.recentPool2 = [];

console.log( 'Item.rolls keeps track of how many times the user has been shown Items.' );
Item.rolls = 0;

console.log( 'Linking the "slots" elements from the DOM' );
Item.slot1 = document.getElementById('slot1');
Item.slot2 = document.getElementById('slot2');
Item.slot3 = document.getElementById('slot3');

console.log( 'Defining Item constructer.' );
function Item(name,filepath){
  this.name = name;
  this.filepath = filepath;
  this.seen = 0;
  this.clicked = 0;
  Item.pool.push(this);
}

Item.duplicateCheck = function(itemName) {
  for(var n = 0; n < Item.recentPool1.length; n++) {
    if(itemName === recentPool1[n]) {
      return(true);
    };
  };
  for(n = 0; n < Item.recentPool2.length; n++) {
    if(itemName === recentPool2[n]) {
      return(true);
    };
  };
  return(false);
};

// displayItems function added to Item constructer
Item.displayItems = function() {
  for(var i = 3; i > 0; i--) {
    // get a random element
    var itemIndex = random(0,Item.pool.length);
    var item = Item.pool[itemIndex];
    if(Item.duplicateCheck(name)) {
      con.log(item[name] + 'has been used too recently.');
    } else {
      if(i === 1) {
        slot1.src = Item.pool[itemIndex].filepath;
      } else if(i === 2) {
        slot2.src = Item.pool[itemIndex].filepath;
      } else if(i === 3) {
        slot3.src = Item.pool[itemIndex].filepath;
      } else {
        console.log('Something went terribly wrong in the "for each slot" loop.');
      }
      break;
    };
  };
};

new Item('Bag','resources/bag.jpg');
new Item('Bananna','resources/banana.jpg');
new Item('Bathroom','resources/bathroom.jpg');
new Item('Bendycharge','resources/bendcharge.jpg');
new Item('Breakfast','resources/breakfast.jpg');
new Item('Bubblegum','resources/bubblegum.jpg');

Item.displayItems();
//listener should listen foItem.poolon any of the three slots, from there I can grab the item name and trigger the frefresh.

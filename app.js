'use strict';

//make an object
//randomly display one picture
//listener, sometjomg tl click on

var imagePool = [];

function Item(name,filepath){
  this.name = name;
  this.filepath = filepath;
  imagePool.push(self);

}

new Image('','resources/.jpg');
new Image('','resources/.jpg');
new Image('','resources/.jpg');
new Image('','resources/.jpg');
new Image('','resources/.jpg');

var imgElement = document.getElementById('goat-pic');
imgElement.addEventListener('click', randomImage);

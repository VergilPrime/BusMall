strict;

//make an object
//randomly display one picture
//listener, sometjomg tl click on

function Image(naame,filepath){
  this.name = name;
  this.filepath = filepath;
  Image.allGoats.push(this);
}

new Image('','images/.jpg');
new Image('','images/.jpg');
new Image('','images/.jpg');
new Image('','images/.jpg');
new Image('','images/.jpg');

var imgElement = document.getElementById('goat-pic');
imgElement.addEventListener('click', randomImage);

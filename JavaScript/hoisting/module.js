function HIDE() {
  var x=0;
  console.log(x);
}

HIDE();

function HIDE() {
  var x=0;
  console.log(x);
}

HIDE();

( HIDE ) ();

( function HIDE() {
  var x=0;
  console.log(x);
} ) ();

( function() {
  var x=0;
  console.log(x);
} ) ();

IIFE

( function IIFE() {
  var x=0;
  console.log(x);
} ) ();


var obj = {key1: 'value'};

(function(a){
	a.key2 = 'value2';
})(obj);

console.log(this); // Global, [object is window]


var obj = {
  a: {key: 'value'},
  foo: function(){
    console.log(this.a);// {key: 'value'}
  },
  bar: function() {
    console.log(a);// Error a is not defined
  }
}

// call
function foo() {
  console.log(this.a);
}

var obj = {
  a: "Hello World"
}

foo.call(obj);

// call with parameter


function foo(param1, param2) {
  console.log(this.a , param1 + param2);
}

var obj = {
  a: "Hello World"
}

foo.call(obj, 1, 2);

// apply
function foo() {
  console.log(this.a);
}

var obj = {
  a: "Hello World"
}
foo.apply(obj);

// apply with parameter

function foo(param1, param2) {
  console.log(this.a , param1 + param2);
}

var obj = {
  a: "Hello World"
}

var arr = [1, 2]

foo.apply(obj, arr);

// bind
function foo() {
  console.log(this.a);
}

var obj = {
  a: "Hello World"
}
var bar = foo.bind(obj);
bar()
// bar will bind obj with foo

var obj = {
  a: "Jon Doe"
}

bar() //Hello World

//Try above with Call and Apply


/*
* Function constructor
*/

function foo(a, b) {
  this.a = a;
  this.b = b;
}

var obj = new foo(1, 2);

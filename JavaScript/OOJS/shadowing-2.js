function Foo(me) {
  this.me = me;
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
}

Foo.prototype.speak = function() {
  console.log("Hello, "+ this.identify() + " .");
}

var a1 = new Foo("a1");
a1.apeak();

// 原型式继承函数
function inheritObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 父对象
function Parent() {
  this.name = "Parent";
  this.colors = ["red", "blue", "green"];
}
const parent = new Parent();

// 子对象
let child = inheritObject(parent);
let child2 = inheritObject(parent);

child.colors.push("black");
console.log(child2.colors);

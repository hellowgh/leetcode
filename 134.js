// gas station

var canCompleteCircuit = function (gas, cost) {
  let l = 0;
  let r = 0;
  let tank = 0;
};

// 父类
function Parent(name) {
  this.name = name || "Parent";
  this.colors = ["red", "blue", "green"];
}

Parent.prototype.sayHello = function () {
  console.log("Hello");
};

// 子类
function Child(name) {
  Parent.call(this, name); // 继承实例属性
}

Child.prototype = new Parent(); // 继承原型属性和方法
Child.prototype.constructor = Child; // 修复构造函数指向

// 创建子类实例
let child1 = new Child("Child 1");
let child2 = new Child("Child 2");

console.log(child1 instanceof Child); // 输出: true
console.log(child1 instanceof Parent); // 输出: true，因为子类的原型链上有父类的原型
console.log(child1 instanceof Object);

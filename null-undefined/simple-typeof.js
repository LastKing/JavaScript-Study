function classof(o) {
  if (o == null) return "NULL";
  if (o == undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(classof({}));
console.log(classof(null)); //NULL
console.log(classof(1));     //Number
console.log(classof(""));    //String
console.log(classof(false));//Boolean
console.log(classof({}));    //Object
console.log(classof([]));    //Array
console.log(classof(/./));  //RegExp
console.log(classof(new Date)); //Date
console.log(classof(global)); //global

var f = function () {
};
console.log(classof(f()));   //NULL

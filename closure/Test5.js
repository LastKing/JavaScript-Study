//get  set特性
function counter(n) {
  return {
    get count() {
      return n++;
    },
    set count(m) {
      if (m > n)n = m;
      else throw Error("Count can only be set to larger value");
    }
  }
}

var c = counter(1000);
console.log(c.count);       //1000
console.log(c.count);       //1001
console.log(c.count = 2000);  //2000
console.log(c.count);       //2000
console.log(c.count = 2000);  //Uncaught Error: Count can only be set to larger value
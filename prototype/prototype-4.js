/**
 * https://segmentfault.com/q/1010000008908725
 * Created by toonew on 2017/3/31.
 */

function Person(name,age){
  this.name=name;
  this.age=age;
  if(typeof this.load!='function'){
    Person.prototype={
      constructor:Person,
      job:'vip',
      load:function(){
        console.log(name,age);
      }
    }
  }
}

var toti=new Person('toti',18);
toti.load();
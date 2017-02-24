/**
 * SF社区的回答：https://segmentfault.com/q/1010000008468945?_ea=1656904#answerEditor
 * Created by Rain on 2016/3/28.
 */
fullname = 'John Doe';

var obj = {
  fullname: 'Colin Ihrig',

  prop: {
    fullname: 'Aurelio De Rosa',

    getFullname: function () {
      return this.fullname;
    }
  },
  getFullname: function () {
    return this.fullname;
  }
};

console.log(obj.prop.getFullname());  //Aurelio De Rosa

console.log(obj.getFullname()); //Colin Ihrig

var test = obj.prop.getFullname;

/*
 第一句 var fullname = 'John Doe';
 这里浏览器 里面是对的，但是node 是正确的，
 写了var  node 不会将其设置为global上的属性，模块的原因
 不写var  会将其设置到global上
 */
console.log(test());//John Doe

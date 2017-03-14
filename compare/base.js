/**
 * Created by toonew on 2017/3/11.
 */
console.log(
  typeof 123,     // number
  typeof 'abcdef',
  typeof true,
  typeof [1, 2, 3, 4],
  typeof {name:'wenzi', age:25},
  typeof function(){ console.log('this is function'); },
  typeof undefined,
  typeof null,
  typeof new Date(),
  typeof /^[a-zA-Z]{5,20}$/,
  typeof new Error()
);


var te=new String('fsa');
console.log(te); 

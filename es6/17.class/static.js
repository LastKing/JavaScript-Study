/**
 * Created by Rain on 2017/2/23.
 */
class test {
  static say() {
    console.log('say static');
  }

  write() {
    console.log('write');
  }
}


test.say();

new test().write();
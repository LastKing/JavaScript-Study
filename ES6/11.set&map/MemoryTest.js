/**
 * 案例出处，此处讲解的weakMap
 * 需要添加 --expose-gc
 * http://es6.ruanyifeng.com/#docs/set-map#WeakMap-%E7%9A%84%E7%A4%BA%E4%BE%8B
 * Created by Rain on 2018/3/20
 */
// 手动执行一次垃圾回收，保证获取的内存使用状态准确
global.gc();

// 查看内存占用的初始状态，heapUsed 为 4M 左右
console.log(process.memoryUsage());
// { rss: 21106688,
//   heapTotal: 7376896,
//   heapUsed: 4153936,
//   external: 9059 }

let wm = new WeakMap();

// 新建一个变量 key，指向一个 5*1024*1024 的数组
let key = new Array(5 * 1024 * 1024);

// 设置 WeakMap 实例的键名，也指向 key 数组
// 这时，key 数组实际被引用了两次，
// 变量 key 引用一次，WeakMap 的键名引用了第二次
// 但是，WeakMap 是弱引用，对于引擎来说，引用计数还是1
wm.set(key, 1);

global.gc();

// 这时内存占用 heapUsed 增加到 45M 了
console.log(process.memoryUsage());
// { rss: 67538944,
//   heapTotal: 7376896,
//   heapUsed: 45782816,
//   external: 8945 }

// 清除变量 key 对数组的引用，
// 但没有手动清除 WeakMap 实例的键名对数组的引用
key = null;

// 再次执行垃圾回收
global.gc();

// 内存占用 heapUsed 变回 4M 左右，
// 可以看到 WeakMap 的键名引用没有阻止 gc 对内存的回收
console.log(process.memoryUsage());
// { rss: 20639744,
//   heapTotal: 8425472,
//   heapUsed: 3979792,
//   external: 8956 }
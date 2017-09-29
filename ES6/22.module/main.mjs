/**
 * https://zhuanlan.zhihu.com/p/29487914?utm_source=qq&utm_medium=social
 * node v8.5.0开始支持，windows v8.6.0 开始支持
 * 启动命令
 *  node --experimental-modules main.mjs
 * Created by toonew on 2017/9/15.
 */
import {add} from './lib.mjs';

console.log('Result: ' + add(2, 3));
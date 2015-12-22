/**
 * Created by toonew on 2015/12/19.
 */

function foo(bar){}

// 调用相同的function，每次都会产生3个不同的上下文
//（包含不同的状态，例如参数bar的值）

foo(10);
foo(20);
foo(30);

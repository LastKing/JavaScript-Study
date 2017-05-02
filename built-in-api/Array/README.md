# Array api的学习

* push/pop        入栈/出栈
* shift/unshift   入队/出队
* join            连接成字符串 (默认  , )
* splice          删除现有元素、或者添加新元素修改数组，直接修改在数组上（返回被删除的元素数组）
* slice/splice/concat 
* sort/reverse    排序/颠倒顺序
* map/reduce      创建新数组/累加
* forEach filter  循环/过滤（返回通过的数据）
* find/findIndex  匹配的  值/索引
* indexOf/lastIndexOf  匹配索引 第一次/最后一次
* some/every      判断数组是否某些/全部通过

栈    后进先出

队列  先进先出

---
splice / join 

`slice` 方法返回一个从`开始`到`结束`选择的一部分`浅拷贝`到一个新的数组

`splice(start[,deleteCount,item1,item2,])` 方法通过删除现有元素和/或添加新元素来更改数组的内容。
，直接修改在数组上（返回被删除的元素数组）

`concat`合并数组 

---
`sort`排序

`reverse`颠倒顺序

---
`map` 创建一个新的数组,其结果是该数组中的每个数据调用一个提供的函数。

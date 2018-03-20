# set & map 学习


为什么会出现map？它和object有什么不同，解决了什么问题?<br/>
答：js中object中key只能为string，不允许key值为object，map弥补了这个缺陷

为什么会有weakSet和WeakMap？
明白弱引用，防止忘记回收造成的内存泄漏，因为其中的元素在不被引用时，自动被gc清除


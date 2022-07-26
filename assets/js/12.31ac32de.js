(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{434:function(t,s,a){"use strict";a.r(s);var n=a(65),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("📢 大家好，我是Milo，一名研二的前端爱好者")]),t._v(" "),a("p",[t._v("📢 这篇文章是Milo学习数据结构与算法时记录的笔记")]),t._v(" "),a("p",[t._v("📢 非常感谢你的阅读，不对的地方欢迎指正 🙏")]),t._v(" "),a("p",[t._v("📢 愿你忠于自己，热爱生活")])]),t._v(" "),a("h2",{attrs:{id:"💡知识点抢先看"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💡知识点抢先看"}},[t._v("#")]),t._v(" 💡知识点抢先看")]),t._v(" "),a("ul",[a("li",[t._v("算法基础")]),t._v(" "),a("li",[t._v("计算时间复杂度")]),t._v(" "),a("li",[t._v("计算空间复杂度")]),t._v(" "),a("li",[t._v("数据结构和算法的学习指南")])]),t._v(" "),a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),a("p",[t._v("Milo在这里总结自己学习数据结构和算法的学习笔记，将涉及栈、队列、链表、堆、树、图...等数据结构，以及经典排序算法，算法设计思想等进阶算法...，同时将会结合"),a("code",[t._v("LeetCode")]),t._v("题目对每篇文章进行巩固和提升!")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ljcimg.oss-cn-beijing.aliyuncs.com/img/image-20210929202048085.png",alt:"image-20210929202048085"}})]),t._v(" "),a("p",[t._v("（图片来源于慕课网截图）")]),t._v(" "),a("h2",{attrs:{id:"一-大-o-表示法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-大-o-表示法"}},[t._v("#")]),t._v(" 一.大 O 表示法")]),t._v(" "),a("p",[t._v("关于复杂度的计算，我们采用的是 "),a("strong",[t._v("大 O 表示法")]),t._v(" ，它用来描述算法性能和复杂程度")]),t._v(" "),a("p",[t._v("常见的表示")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("符号大O标记法")]),t._v(" "),a("th",[t._v("名称")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("O(1)")])]),t._v(" "),a("td",[t._v("常数")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O(log N)")])]),t._v(" "),a("td",[t._v("对数")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O(N)")])]),t._v(" "),a("td",[t._v("线性")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O(N log N)")])]),t._v(" "),a("td",[t._v("对数多项式")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O(N^2)")])]),t._v(" "),a("td",[t._v("二次")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O(2^N)")])]),t._v(" "),a("td",[t._v("指数")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O(N!)")])]),t._v(" "),a("td",[t._v("阶乘")])])])]),t._v(" "),a("p",[t._v("大 O 表示法一般考虑的是 "),a("code",[t._v("CPU")]),t._v(" 占用时间，它可以粗略的了解代码运行的时间效率")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我们调用这个函数一次，执行时间是 "),a("code",[t._v("t")]),t._v(" ，我们再调用一次，执行时间还是 "),a("code",[t._v("t")]),t._v("，和传入的参数无关， "),a("code",[t._v("test")]),t._v(" 函数的性能都一样，因此它的复杂度为 "),a("code",[t._v("O(1)")])]),t._v(" "),a("p",[t._v("当循环 "),a("code",[t._v("n")]),t._v(" 次时，就是 "),a("code",[t._v("O(n)")])]),t._v(" "),a("h2",{attrs:{id:"二-时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-时间复杂度"}},[t._v("#")]),t._v(" 二.时间复杂度")]),t._v(" "),a("p",[t._v("大 "),a("code",[t._v("O")]),t._v(" 表示法表明的是该段代码执行时间随数据规模增大的变化趋势，它的特点是")]),t._v(" "),a("ul",[a("li",[t._v("只关注量级最大的时间复杂度")])]),t._v(" "),a("p",[t._v("常见的时间复杂度量级 "),a("code",[t._v("O(1) < O(logn) < O(n) < O(n^2)")])]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("O(2)、O(3)")]),t._v(" 这些，我们都叫做 "),a("code",[t._v("O(1)")]),t._v(" 常数级")]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("h3",{attrs:{id:"_1-o-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-o-1"}},[t._v("#")]),t._v(" 1. O(1)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每次执行代码只执行一次 O(1)")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这段代码每次只执行一次，因此为 "),a("code",[t._v("O(1)")])]),t._v(" "),a("h3",{attrs:{id:"_2-o-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-o-n"}},[t._v("#")]),t._v(" 2. O(n)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("再上面这段代码中，我们每次都需要执行 "),a("code",[t._v("n")]),t._v(" 次的 "),a("code",[t._v("log")]),t._v(" ，因此我们可以把它看作 "),a("code",[t._v("O(n)")])]),t._v(" "),a("p",[t._v("同样的我们再来看一个")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ni "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这种代码我们经常写，前面是我们刚刚计算的 "),a("code",[t._v("O(1)")]),t._v("，后面是 "),a("code",[t._v("O(n)")]),t._v(" ，它们并行排列，时间复杂度相加，取最大的那个")]),t._v(" "),a("ul",[a("li",[t._v("因此它的时间复杂度同样是 "),a("code",[t._v("O(n)")])])]),t._v(" "),a("h3",{attrs:{id:"_3-o-log-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-o-log-n"}},[t._v("#")]),t._v(" 3. O(log(n))")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("对于 "),a("code",[t._v("log(n)")]),t._v(" 的情况，在个时间复杂度是很好的，当然 "),a("code",[t._v("O(1)")]),t._v(" 是最好的，但是在解题的时候，如果能优化到 "),a("code",[t._v("log(n)")]),t._v(" 也是很不错的了")]),t._v(" "),a("p",[t._v("那它是如何计算的呢？")]),t._v(" "),a("p",[t._v("我们可以看到，这里采用了 变量"),a("code",[t._v("i")]),t._v("来控制循环的终止，每次循环体中，都需要 "),a("code",[t._v("2 * i")]),t._v(" 的操作")]),t._v(" "),a("p",[t._v("因此对于时间复杂度的计算 "),a("code",[t._v("2^t = n")]),t._v(" 解得 "),a("code",[t._v("t = log(n)")])]),t._v(" "),a("h3",{attrs:{id:"_4-o-n-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-o-n-2"}},[t._v("#")]),t._v(" 4. O(n^2)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("对于这种嵌套排列，时间复杂度是 "),a("code",[t._v("n^2")]),t._v(" ，外面一层 "),a("code",[t._v("n")]),t._v(" ，里面一层 "),a("code",[t._v("n")]),t._v(" 乘一下就是 "),a("code",[t._v("n^2")]),t._v("，冒泡排序的时间复杂度就是 "),a("code",[t._v("O(n^2)")])]),t._v(" "),a("p",[t._v("关于时间复杂度就介绍这么多，其他的思路都差不多")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ljcimg.oss-cn-beijing.aliyuncs.com/img/image-20211029161002646.png",alt:"image-20211029161002646"}})]),t._v(" "),a("h2",{attrs:{id:"三-空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-空间复杂度"}},[t._v("#")]),t._v(" 三.空间复杂度")]),t._v(" "),a("p",[t._v("空间复杂度表示的是：存储空间随数据规模的增长趋势，在 "),a("code",[t._v("LeetCode")]),t._v(" 中最直接的反应就是"),a("strong",[t._v("内存消耗")])]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("h3",{attrs:{id:"_1-o-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-o-1-2"}},[t._v("#")]),t._v(" 1. O(1)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在这里我们申请了单个变量的内存空间，为 "),a("code",[t._v("O(1)")])]),t._v(" "),a("h3",{attrs:{id:"_2-o-n-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-o-n-2"}},[t._v("#")]),t._v(" 2. O(n)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("像这样的一个数组，并给它填满值，"),a("code",[t._v("n")]),t._v(" 越大，它需要分配的空间就越多，它的空间复杂度就是 "),a("code",[t._v("O(n)")])]),t._v(" "),a("h3",{attrs:{id:"_3-o-n-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-o-n-2"}},[t._v("#")]),t._v(" 3. O(n^2)")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("int arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历赋值")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("声明一个二维数组，填满值，它的空间复杂度就是 "),a("code",[t._v("O(n^2)")]),t._v(" ，你可以理解为一个矩阵，"),a("code",[t._v("n*n")]),t._v(" 为 "),a("code",[t._v("n^2")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[t._v("复杂度计算按最高阶来计算")]),t._v(" "),a("li",[t._v("时间、空间复杂度描述的都是随数据规模的变化趋势")]),t._v(" "),a("li",[t._v("时间复杂度的重点在于循环嵌套")]),t._v(" "),a("li",[t._v("空间复杂度关注于内存")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("笔记来源")]),t._v(" "),a("a",{attrs:{href:"https://linjuncheng.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("小丞前端日记"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("书籍：《JavaScript 数据结构和算法》")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github (opens new window)"),a("OutboundLink")],1),t._v("仓库："),a("a",{attrs:{href:"https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 算法与数据结构(opens new window)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("视频推荐：B站 "),a("code",[t._v("coderwhy")]),t._v(" 老师的"),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1a5411t7vZ?p=22",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频(opens new window)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("刷题地址："),a("code",[t._v("acwing")]),t._v("，"),a("code",[t._v("leetcode")])])])}),[],!1,null,null,null);s.default=e.exports}}]);

/****************************************************** 获取当前日期星期几 ******************************************************/

// let dt = new Date('2022-07-29 00:00:00')
// let week = [7, 1, 2, 3, 4, 5, 6]
// console.log(week[dt.getDay()])


/****************************************************** 模拟computed ******************************************************/
// class ComputedRef {
//     constructor(getter, setter) {
//         this.flag = true;

//         this.getValue = () => {
//             if (this.flag) {
//                 this.flag = false;
//                 return getter();
//             }
//         }

//         this.setValue = (value) => {
//             setter(value);
//         }
//     }
// }

// function computed(op) {
//     let getter = op.get;
//     let setter = op.set;
//     let ref = new ComputedRef(getter, setter);
//     return ref;
// }


// let params = {
//     value: 10,
//     get() {
//         console.log("params", this.num);
//     },
//     set() {
//         this.num + 1;
//     }
// }

// computed(params);

// params.get();
// params.set();
// params.get();

// console.log(num)

// setTimeout(() => {
//     num + 2;
//     params.get();
// }, 1000);


/****************************************************** 对象指定键值的累加 ******************************************************/
// let objArr = [{ age: 1, a: 1, b: 2 }, { age: 2, c: 2 }, { age: 3 }, { age: 4, d: 2 }, { age: 6, a: 140 }, { age: 18 }, { age: 17 }, { age: 41 }]

// function fn(arr, arrkey) {
//     let count = {};
//     arrkey.forEach(key => {
//         count[key] = 0;
//         arr.forEach(i => {
//             if (i[key]) count[key] += i[key];
//         })
//     })
//     return count;
// }

// console.log(fn(objArr, ['age', 'a', 'c']))


/****************************************************** 未成品 输出字符串数组中最长相同串 ******************************************************/

// let arr = ['hellooasdwqe', 'halloooooasdo', 'looooasdft'];

// function dddd(strArr) {
//     let output = "";
//     let record = [];
//     for (let i = 1; i < strArr.length; i++) {
//         let str = strArr[i];
//         let lock = true;
//         for (let j = 0; j < str.length; j++) {
//             if (strArr[0].includes(str[j])) {
//                 if (lock) {
//                     output = str[j];
//                     lock = false;
//                 } else {
//                     output += str[j];
//                 }
//             }
//             continue;
//         }
//         record.push(output);
//     }
//     return record;
// }

// console.log(dddd(arr))


/****************************************************** 数组分割 ******************************************************/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
// let count = Math.ceil(Math.sqrt(arr.length))
// let formatData = []
// for (let i = 0; i < count; i++) {
//     formatData.push(arr.slice(i * count, count * (i + 1)))
// }
// console.log(formatData)


/****************************************************** 获取最近3天或者7天或者30天 ******************************************************/
// function FunGetDateStr(p_count) {
//     var dd = new Date();
//     dd.setDate(dd.getDate() - p_count);
//     var y = dd.getFullYear();
//     var m = dd.getMonth() + 1;
//     if (m < 10) {
//         m = '0' + m;
//     }
//     var d = dd.getDate();
//     if (d < 10) {
//         d = '0' + d;
//     }
//     return y + "-" + m + "-" + d
// }

// console.log(FunGetDateStr(3))
// console.log(FunGetDateStr(7))
// console.log(FunGetDateStr(30))


/****************************************************** 数字转罗马数字 ******************************************************/
// class intToRoman {
//     // I1 X10 C100 V5 L50 D500 M1000
//     constructor() {
//         this.state = {
//             roman: ""
//         }

//         this.valueSplit = (v) => {
//             let str = v.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,")
//             return str.split(',')
//         }

//         this.transformN = (n) => {
//             n = n.length == 3 ? n : n.padStart(3, null)
//             for (let i = 0; i < n.length; i++) {
//                 switch (i) {
//                     case 0: this.setRoman(n[i], 'C', 'D', 'M'); break;
//                     case 1: this.setRoman(n[i], 'X', 'L', 'C'); break;
//                     case 2: this.setRoman(n[i], 'I', 'V', 'X'); break;
//                 }
//             }
//         }

//         this.setRoman = (toRoman, a, b, c) => {
//             this.state.roman += this.check(toRoman, a, b, c)
//         }

//         this.check = (toRoman, a, b, c) => {
//             let frequency = parseInt(toRoman)
//             if (frequency == 9) return `${a + c}`
//             else if (frequency == 0) return `#`
//             else if (frequency == 4) return `${a + b}`
//             else if (frequency == 5) return `${b}`
//             else if (frequency > 5) return `${b + a.repeat(frequency - 5)}`
//             else return a.repeat(frequency)
//         }
//     }
//     calculation = (callback) => {
//         if (callback) {
//             let value = callback()
//             return this.transformRoman(value)
//         }
//     }

//     transformRoman = (value) => {
//         let nSplit = this.valueSplit(value)
//         nSplit.forEach((n, idx) => {
//             this.transformN(n)
//             if (idx != nSplit.length - 1) this.state.roman += ','
//         })
//         return this.state.roman
//     }
// }

// console.log(new intToRoman().transformRoman('80108010'))
// console.log(new intToRoman().transformRoman(990108010))
// console.log(new intToRoman().calculation(() => 2 * 6 / 3))


/****************************************************** 返回指定的key ******************************************************/
// let data = [
//     {
//         context: "test context",
//         createTime: "2022-01-17 13:39:44",
//         id: 2,
//         operationTime: "2022-01-18 15:16:31",
//         outTime: "2022-01-18 16:26:31",
//         recName: "大河镇、获鹿镇",
//         remindTime: "2022-01-17 13:49:45",
//         state: 1,
//         step: 2,
//         tdIds: "4,5",
//         tdName: "白鹿泉乡",
//         title: "test title",
//         updateTime: "2022-01-18 15:19:53",
//         userId: 3,
//     },
//     {
//         context: "test context",
//         createTime: "2022-01-17 13:39:44",
//         id: 3,
//         operationTime: "2022-01-18 15:16:31",
//         outTime: "2022-01-18 16:26:31",
//         recName: "ddd",
//         remindTime: "2022-01-17 13:49:45",
//         state: 1,
//         step: 2,
//         tdIds: "1,2",
//         tdName: "ddd乡",
//         title: "22222222",
//         updateTime: "2022-01-18 15:19:53",
//         userId: 5,
//     },
// ];

// function exportSomeKeys(data, aryKeys) {
//     return data.reduce((pre, item) => {
//         let temp = {};
//         aryKeys.forEach((key) => {
//             temp[key] = item[key] ?? null;
//         });
//         pre.push(temp);
//         return pre;
//     }, []);
// }
// console.log(exportSomeKeys(data, ["userID", "title", "recName", "tdIds", "tdName"]))


/****************************************************** list转treeObj ******************************************************/
// let fs = require('fs')

// const listTree = (list, pid) => {
//     let treeObj = {}
//     list.forEach(item => {
//         item.children = []
//         treeObj[item.id] = item
//     })
//     return list.filter(item => {
//         if (item.pid !== pid) {
//             treeObj[item.pid].children.push(item)
//             return false
//         }
//         return true
//     })
// }

// fs.readFile('list.json', 'utf-8', (err, data) => {
//     // listTree(JSON.parse(data), 'E0')
//     console.log(listTree(JSON.parse(data), 'E0')[0].children)
// })


/****************************************************** 超过9位就从1开始覆盖 ******************************************************/
// let initArr = []

// const init = (arr, n, len = 9) => {
//     return Array.isArray(n)
//         ? (() => {
//             let newArr = n.map(i => check9(arr, i, len));
//             return newArr[newArr.length - 1];
// 要数组的历史数据就直接return n.map(i => check9(arr, i, len))，不要就只return最后一个
//         })()
//         : check9(arr, n, len)
// }

// const check9 = (arr, n, len) => {
//     if (!arr.includes(n))
//         return arr.length >= len ? (() => { arr.push(n); return arr.slice(-len) })() : (() => { arr.push(n); return arr })()
// }

// initArr = init(initArr, { name: 1 }, 6)
// initArr = init(initArr, 15, 7)
// console.log(initArr)


/****************************************************** 获取children值 ******************************************************/
const list = [
    { id: 6 },
    { id: 2, children: [5] },
    { id: 13 },
    { id: 5, children: [10, 11, { children: [4, 5, 6, { children: [9, 5, 1, { children: [4, 2, 3] }] }] }] },
    { id: 1, children: [2, 3, 4] },
    { id: 4, children: [8, 9, { children: [1, 8, 3] }] },
    { id: 9 },
    { id: 3, children: [6, 7] },
    { id: 11, children: [14, { children: [5, 1, 0, { children: [1, 2, 3] }] }] },
    { id: 14 },
    { id: 7, children: [12] },
    { id: 12 }
]

function hasC(el) {
    if (el.hasOwnProperty('children')) {
        let arr = []
        el.children.forEach(c => {
            if (c.hasOwnProperty('children')) arr.push(hasC(c))
            else arr.push(c)
        });
        return arr
    }
    return el
}

let arr = list.reduce((prev, next) => {
    if (next.hasOwnProperty('children')) {
        let arr = []
        next.children.forEach(el => {
            arr.push(hasC(el))
        });
        prev.push([next.id, ...arr]) // ...arr.flat(Infinity)
        return prev
    } else {
        prev.push([next.id])
        return prev
    }
}, [])

console.log(arr)


/****************************************************** 扩展数组为 null 的变量 ******************************************************/
// const listArrN = null
// console.log([...(listArrN || [])])


/****************************************************** 查看首字符 ******************************************************/
// function startsWith(source, searchString) {
//     return source.startsWith(searchString);
// }
// console.log(startsWith('ddd', 'd'))
// 执行结果：ddd


/****************************************************** 柯里化 ******************************************************/
// 问：
// 如何跳过第一个参数，只传第二个参数
// 提示：
// 如果不传第一个参数,会报错
// 传值的话，value就会被覆盖
// 怎么才能即保存 ddd 又传后续值 aaa
// 答：
// function func(value = 'ddd') {
//     return function (...args) {
//         console.log(value, ...args)
//     }
// }
// func()('1', '2', '3')

// 简写
// const foo = (a = "ddd") => (...args) => { console.log(a, ...args) }
// foo()('1','2','3')
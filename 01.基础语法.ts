// 输出日志
console.log("hello world.")


// 声明变量
// 关键字 变量名: 变量类型 = 变量值
let a: number = 10;
console.log("a=" + a);


// 声明常量
const b: string = "abc";
console.log("b=" + b);


// 类型推断，省略变量类型
let c = 100;
let d = "ddd";
console.log("c=" + c + ", typeof c = " + typeof c);
console.log("d = " + d + ", typeof d = " + typeof d);


// 常用数据类型

// 1. 数字类型 number 包含整数和浮点数
let num1 = 1;
let num2 = -1;
let num3 = 2.1;
let num4 = -3.3;
console.log("num1=" + num1 + ", typeof num1=" + typeof num1);
console.log("num2=" + num2 + ", typeof num2=" + typeof num2);
console.log("num3=" + num3 + ", typeof num3=" + typeof num3);
console.log("num4=" + num4 + ", typeof num4=" + typeof num4);

// 2. 字符串 string
let str1: string = "hello";
let str2 = "world";
console.log('str1=' + str1 + ", typeof str1=" + typeof str1);
console.log("str2=" + str2 + ", typeof str2=" + typeof str2);

// 3. 布尔值 boolean
let bool1: boolean = false;
let bool2 = true;
console.log("bool1=" + bool1 + ", typeof bool1=" + typeof bool1);
console.log('bool2=' + bool2 + ", typeof bool2=" + typeof bool2);

// 4. 数组
// 数组类型定义由两部分组成 元素类型[], 例如: string[], number[]
// 数组类型的变量可以由数组字面量进行初始化: [item1, item2]
// typeof arr 返回 object 类型
let arr1: number[] = [];
let arr2: string[] = ['hello', "world"];
console.log("arr1=" + arr1 + ", typeof arr1=" + typeof arr1);
console.log("arr2=" + arr2 + ", typeof arr2=" + typeof arr2);

// 5. 对象
// ts 中的对象 (object) 是一种一系列由 属性名和属性值 组成的数据结构，
// 对象声明需要包含所有属性的名称和类型，例如: {name:string, age:number}
// 对象类型的变量可以通过对象字面量初始化，例如: {name:'zhangsan', age:10}
let obj1: { name: string, age: number } = { name: 'zhangsan', age: 10 };
let obj2 = { name: 'lisi', genter: 'nan' };
console.log("obj1=" + obj1 + ", typeof obj1=" + typeof obj1 + ", name=" + obj1.name + ", age=" + obj1.age);
console.log('obj2=' + obj2 + ", typeof obj2=" + typeof obj2 + ", name=" + obj1.name + ", gender=" + obj2.genter);


// 函数

// 函数声明语法: function关键字 函数名称(参数名称:参数类型..):返回值类型 {函数体}
function sum(a: number, b: number): number {
    return a + b;
}

// 可选参数
// 可选参数通过参数名后的 ? 进行标识，调用函数时，如果没有传入可选参数，则该参数的值为 undefined
function printPersonInfo(name: string, gender?: string) {
    if (gender === undefined) {
        gender = "未知";
    }
    console.log(`personInfo={name:${name}, gender:${gender}}`);
}
// 传入 gender
printPersonInfo('zhangsan', 'nan')
// 不传 gender, 此时 gender为 undefined
printPersonInfo("lisi")

// 默认参数
// 在函数的参数类型后面为该参数设置默认值
function printPersonInfo2(name: string, gender: string = '未知') {
    console.log(`personInfo2={name=${name}, gender=${gender}}`);
}
printPersonInfo2('zhansan2', 'nan');
printPersonInfo2('lisi2');


// 特殊类型

// 联合类型
// 一个函数可能用于处理不同类型的值，此时可以使用联合类型，联合类型声明: message:string|number
function printMsg(msg: string | number) {
    console.log(`printMsg={msg:${msg}}, typeof msg=${typeof msg}`);
}
printMsg("success.")
printMsg(100);

// 任意类型
// 若函数需要处理任意类型的数据，可以使用 any 声明数据类型: message: any
function printMsg2(msg: any) {
    console.log(`printMsg2={msg:${msg}}, typeof msg=${typeof msg}`);
}
printMsg2("success.");
printMsg2(100);
printMsg2(true);



// 返回值

// 特殊类型
// 若函数没有返回值，则可以使用 void 作为返回值类型
function fun1(): void {
    console.log("fun1");
}

// 返回值类型推断
// 函数的返回值类型可以根据函数内容推断出来，因此可以省略
function fun2() {
    console.log("fun2");
}

function fun3() {
    return 1 + 1;
}


// 函数声明特殊语法

// 匿名函数
// 匿名函数的语法结构简洁，适用于简单且仅需一次使用的场景
let numberArr = [10, 20, 30];
numberArr.forEach(function (num: number) {
    console.log('numberArr foreach, value=' + num);
})

// 匿名函数可以根据上下文推断出参数类型，因此可以省略参数类型
numberArr.forEach(function (num) {
    console.log(`numberArr foreach2, value=${num}`);
})

// 箭头函数
// 匿名函数的语法还可以进一步简化，只保留参数列表和函数体两个核心部分，两者使用 => 符号连接
numberArr.forEach(num => {
    console.log(`numberArr foreach3, value=${num}`);
})








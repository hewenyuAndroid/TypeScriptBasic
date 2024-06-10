// 类的定义

class Person {
    // 定义属性
    id: number;
    name: string;
    age: number = 10;

    // 构造函数
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // 成员函数
    toString() {
        console.log(`Person{id:${this.id}, name:${this.name}, age:${this.age}};`)
    }

}


// 创建对象
let person1 = new Person(1, 'zhangsan');

// 属性和成员函数的读写
person1.age = 20;
person1.toString();


// 静态成员
// ts中的类可以包含静态成员（静态属性和静态方法），静态成员隶属于类本身，而不属于类对象实例，静态成员通常用于定义常量和工具方法

// 声明静态成员

class Constants {
    // 定义静态属性
    static count: number = 10;
}

class Utils {
    // 定义静态函数，注意静态函数不需要 function 关键字
    static toLowerCase(str: string): string {
        return str.toLowerCase();
    }
}

// 使用静态成员
Constants.count++;
console.log("Constants.count=" + Constants.count);
console.log("Utils.toLowerCase=" + Utils.toLowerCase("Hello World."));

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
}

var xiaoming = {
    name: '小明'
}

xiaoming.__proto__ = Student;//将小明的原型指向了对象Student,看上去xiaoming仿佛是从student继承来的
// xiaoming.run()

// javascript的原型链接与java的Class区别就在,它没有Class的概念,所有对象都是实例,所谓继承关系，只不过是把一个对象的原型指向另一个对象而已
//如果想把xiaoming的原型指向其他对象,例如:指向鸟，他就变成了一只鸟
var Bird = {
    fly: function () {
        console.log('fly...');
    }
}
xiaoming.__proto__ = Bird;
// 那xiaoming就无法继承Student的run()方法了

//注意 
//1.在javascript运行期间，可以把对象变成任何继承对象;
//2.编写javascript代码，不要直接用obj.__proto__去改变一个对象的原型,且低版本IE也不支持使用__proto__。Object.create()可以传入一个原型对象，创建一个基于该原型的新对象,但是新对象什么属性也没有，因此可以编写一个函数来创建xiaoming，如下:

function createStudent(name){
    s=Object.create(Student);
    s.name=name;
    return s;
}
xiaoming=createStudent('大飞')
xiaoming.run();
xiaoming.__proto__===Student;


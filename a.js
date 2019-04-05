
var Student={
    name:'Robot',
    height:1.2,
    run:function(){
        console.log(this.name+' is running...');
    }
}

var xiaoming={
    name:'小明'
}

xiaoming.__proto__=Student;//将小明的原型指向了对象Student,看上去
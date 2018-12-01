//javascript中数据类型可分为简单数据类型（undefined,boolean,number,string,null）和复杂数据类型object
//用typeof区分数据类型，typeof返回的值有undefined,boolean,number,string,object(null在其内),function
var a;
var b = 12;
var c = 'cc';
var d = true;
var e = null;
var f = function () {
};
var g = {num: 1};
var arr = [a, b, c, d, e, f, g]
for (var i = 0; i < arr.length; i++) {
    console.log(typeof arr[i])
}
//用Boolean()转化数据类型，空字符串，0，null,undefined,NaN可以转化为false,其他值转化为true

//函数
function add(num1, num2) {
    return num1 + num2;
}
add(1,2)
//函数中默认带一个arguments对象（数组），参数个数与定义函数时参数个数并不一定要相同
add(2,3,4,5)
//让函数可以接受无数个参数
function addAll(){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum)
    return sum;
}
addAll(1,2,3,4,5)

//闭包，javascript中变量分为全局变量和局部变量
//函数可以读到全局变量，函数外部不能读取函数内部定义的变量（局部变量用var 定义，否则会变成全局对象的一个属性即全局变量）
//建议所有变量用var关键字进行定义
//闭包让（内部）函数读取到其他（外部）函数内部的变量
function a(){
    var str='node.js';
    console.log(str)
    return function(){
        console.log(str+' is powerful');
    }
}
a()()
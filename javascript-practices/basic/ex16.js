/**
 * function 타입의 객체(함수)
 */

// 함수를 생성 하는 방법1 : 함수 리터럴
function f1(a,b){
    return a+b;
};

console.log(typeof(f1),f1(10,20));

// 함수를 생성 하는 방법2 : 함수 리터럴
var f2 = function(a,b){
    return a+b;
};

console.log(typeof(f2),f2(10,20));

// 함수를 생성 하는 방법3 : new 연산자와 함깨 Function() 생성자 함수를 사용하는 방법
var f3 = new Function("a","b","return a+b");
console.log(typeof(f3),f3(10,30));

// 함수를 생성 하는 방법4 : 익명 (Annoymouse) 함수
setTimeout(function(){
    console.log("Time out");
},1000);

// 즉시 실핼하는 함수
var s =(function(a,b){
    var m=10;    
    return a/m + b/m;
})(10,20);
console.log(s);

//가변 파라미터 함수
var sum = function(){
    // console.log(arguments,arguments instanceof Array,arguments.length);
    var sum=0;
    // Error: arguments의  __proto__는 Object의 prototype에 chain이 되어 있기 때문
    // for(var i=0;i<arguments.length;i++){
    //     sum+= arguments[i];
    // }
    
    // arguments는 유사배열  foreach, filter 등등 기능을 이용하려면 Array.prototype.().call 이나 apply 를 사용해야함.. 
    arguments=Array.prototype.filter.call(arguments,(e)=>e>10)

    Array.prototype.forEach.call(arguments,function(e){
        sum +=e;
    });

    return sum;
}

// 가변 파라미터 
console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,40));
console.log(sum(10,40));
console.log(sum(10,50));
console.log(sum(10,70,80));
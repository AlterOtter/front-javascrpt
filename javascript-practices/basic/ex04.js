/*
변수의 범위(Scope)
1. 자바 스크립트는 어휘에서 변수의 범위를 알 수 있다.(Lexical Scope)
2. ES6 이전
    - 자바와 같은 블록 범위를 지원하지 못했다.
    - 함수 범위
    - function() {...} 안에서 변수 안에 var  키워드를 사용하면 ㅎ마수 범위를 가지게 된다.
    - 만약에  var 키워드가 없이 함수 안에서 변수를 정의하면 전역 범위를 가지게 된다.(hoisting)
3. ES6 이후
    - Block Scope를 적용 할 수 있는 두 개의 키워드를 지원 ( const , let )
4. 결론
    const / let 만 사용하고 반드시 붙이자
*/
var i=10;

var f = function(){
    let i = 10;
    j=100;
    console.log(i);
    i=j-i;
}
f();
console.log(i);
console.log(j);

//var 키워드는 함수 블록에서 함수 범위만 가지게 할 때 적용 된다.
if(j == 100){
    var k = 20;
}

console.log(k);


{
    let x = 100000;
    const PI = Math.PI;
    x= 100;

    // 상수 이기 때문에 에러
    // PI = 0 ;
}

// Error :  접근이 안된다.
// console.log(x);
// console.log(PI);


var arr = [1,2,3,4,5];
var arr2 = arr.filter( a => a>1);
console.log(arr2.join(','));

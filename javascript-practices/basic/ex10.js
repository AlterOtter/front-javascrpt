/**
 * 배열
 */

//배열 생성1 : 내장객체(생성자 함수)를 사용
console.log("== 배열 생성1: 내장객체(생성자 함수)를 사용 ==");

var a1 = new Array();
console.log(typeof(a1),a1 instanceof Array, a1.length);

// 배열을 생성할때 크기 지정

var a2 = new Array(10);
// 크기지정은 별로 의미가없다
// 동적으로 배열이 늘어난다

console.log(typeof(a2),a2 instanceof Array, a2.length);
a2[0]=0;
a2[5]=5;
a2[10]=10;
a2[20]=20;
console.log(a2);

//초기값을 지정 할 수 있다.
var a3 =new Array(0,2,3,4,5,6,7,8);
console.log(a3);

//배열 생성2: 리터럴을 사용하기
console.log("== 배열 생성2: 리터럴 사용 ==");
var a4=[10,"javascript",function(){
    console.log("Hello World!");
},{
    name:"마이콜",
    age:30
}];

console.log(a4.length);

for(var i=0;i<a4.length;i++){
    console.log(a4[i]);
}

a4[2]();

// Array VS Object
console.log("== Array VS Object ==");

a5 = [];
a5[0]=0;
a5["1"] =1;
a5.name="둘리";
a5["age"]=10;

console.log(a5["0"],a5.length,a5.age);

for(prop in a5){
    console.log(prop);
}

o5={};
o5[0]=0;
o5["1"]=1;
o5.name="둘리";
o5["age"] = 10;
o5.length=2;

console.log(o5["0"],o5[1],o5.length,o5["name"],o5.age,);



console.log("======================= Global Object =======================");

globalThis.name = "둘리";

global.name="리리";
console.log(name,globalThis.name);

email = "dooly@gamil.com";

console.log(email,globalThis.email);

console.log("======================= function의 객체 메소드 apply =======================")
var f1 = function(){
    console.log(this);
}

// f1();

//this 바꾸기
var o = {
    name:'제라라이'
};

f1.apply(o);

console.log("======================= function 객체의 메소드 call =======================");
var f2 = function(s1,s2){
    console.log(s1+':'+s2+':'+this.name);
}

f2('hi','');
f2.call(o,'hi','again');// 매개변수가 노출되어 있는경우
f2.apply(o,['hi','again']);// 매개변수를 배열 형태로 집어 넣어야함
                            // bind는 값은 지정이 되지만 함수는 호출 되지 않는다.


ㄴ                            
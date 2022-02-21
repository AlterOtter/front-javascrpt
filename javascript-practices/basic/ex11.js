/**
 * Array 메소드 (Array.prototype)
 */
var colors=["black","white","yellow"];
var fruits=["apple","Banana","peak"];

//concat
var a1 = fruits.concat(colors);
console.log(a1);

//pop, push :  stack 지원
var color=colors.pop();
console.log(color,colors);
colors.push('red');
console.log(colors);

//join
var str = fruits.join("::");
console.log(str);

//reverse
fruits.reverse();
console.log(fruits);

//shift
var numbers =[100,10,30,20,40,5000,60];
var number =numbers.shift();
console.log(number,numbers);

//sort
numbers.sort();
console.log(numbers);

//slice
var numbers=numbers.slice(1,3);
console.log(numbers);

//splice
//index부터 count 갯수 만큼 삭제한 후, 삭제된 요소를 반환
var fruits2 = fruits.splice(0,2);
console.log(fruits2);

//filter
var numbers  = numbers.filter(e=> e>=20);
console.log(numbers);

//index
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1/*start */,3/*end */,10/* replace */);
console.log(a1,a2);

//a1.removeAt(1)
var a1=[0,2,3,4,5];
var a2= a1.splice(1,1);
console.log(a2,a1);


//a1.insertAt(1,10)
var a1=[0,1,2,3,4];
var a2 = a1.splice(1,0,10);
console.log(a2,a1);



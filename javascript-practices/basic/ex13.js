/**
 * 
 * String 객체 메소드(String.prototpye)
 * 
 */

s= 'hello';
s.substring(); // (new String(s).protoype.*)

//배열 처럼 접근이 가능하다.
var str1 = 'Hello World';
for(var i=0;i<str1.length;i++){
    console.log(str1[i]);
}

var str2="Hello";
var str3="World";
var str4 = str2+' '+str3;
console.log(str4);

var str5 = 5+'5';

console.log(str5);

var str6 = 'boolean:'+true;

console.log(str6);

var str7 ="string1 string2 string3";

var index = str7.indexOf("string3");
console.log(index);

var str8 = str7.substring(10,3/*count */);
console.log(str8);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a = str11.split(":");
console.log(a);
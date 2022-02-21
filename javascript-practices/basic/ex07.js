/**
 * 자바 스크립트 객체2: function 타입
 */

//일반 함수 (실행코드[알고리즘] 블록이 있는 객체, 관례에 따라 소문자로 시작)

// 생성자 함수(실행코드[객체초기화] 블록이 있는 객체, 관례에 따라 대문자로 시작)

var MyObject = function(name,age){
    this.name= name;
    this.age = age;
}

var o1 = new MyObject('둘리',30);
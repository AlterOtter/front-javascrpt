/**
 * Data 객체 메소드 (Date.prototype.*)
 */

var now = new Date();
console.log(now);

//2022년 22월 22일 22:22:22

var d1 = new Date (2022,1/*month-1*/,22);
console.log(d1);

//객체 메소드
console.log(
    "년도 : "+(now.getFullYear()+1900)+"\n"+
    "월 : " +(now.getMonth()+1)+"\n"+
    "일 : " +(now.getDate()+1)+"\n"+
    "시 : " +(now.getHours()+1)+"\n"+
    "분 : " +(now.getMinutes()+1)+"\n"+
    "초 : " +(now.getSeconds()+1)+"\n"+
    "밀리초 : " +now.getMilliseconds()
    );
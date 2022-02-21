/**
 * Array 확장(prototype 기반의 확장) : List 메소드 추가
 */

Array.prototype.insert = function(index,value){
    if(value instanceof Array){
        // for(var i =0;i<value.length;i++){
        //     this.splice(index++,0,value[i]);
        // }

        //해결방법 1
        // var _this =this;
        // value.forEach(function(e,index){
        //     console.log(e,index);
        //     _this.splice(index++,0,e);
        // });
        //해결방법2 :함수의 bind로 함수 실행 대의 this를 세팅해 해 줄 수 있다.
        value.forEach(function(e,index){
            console.log(e,index);
            this.splice(index++,0,e);
        }).bind(this);
        // 콜백안의 this는 예측 못한다. 
        // var f = function(e){
        //     this.splice(index++,0,e);
        // };

        // value.forEach(f.bind(this));
    }else{

        this.splice(index,0,value);
    }

}
Array.prototype.remove=function(index){
    this.splice(index,1);
}


//List 로 사용하기
var a = [1,2,3];

console.log(a);

a.remove(1);
console.log(a);


a.insert(2,3);
console.log(a);


a.insert(2,['a','b','c']); 
console.log(a); // 결과 [1,2,['a','b','c']];
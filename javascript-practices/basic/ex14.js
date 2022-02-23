/**
 * URL 다루기
 */


var url1 = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape: URL 전부 encoding, 사용X, deprecated
var url2= escape(url1);
console.log(url2);


// 2. encodeURI: parameter만 encoding
var url3 = encodeURI(url1);
console.log(url3);


// 3. encodeURIComponent : 값만 인코딩 해야하는 경우. 사용 ( O )
var url4 = encodeURIComponent(url1);
console.log(url4);

// 4. 만들어야 할 URL
// http://mysite.com/user?no=10&name=둘리&email=dooly@gmail.com


var params ={
    name:'둘리',
    email:'dooly@gmail.com',
    no:10
};

var toQueryString = function(o){
    var qs =[];
    for(prop in o){
        qs.push(prop+"="+encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}

var s = toQueryString(params);
console.log(s);
var url="http://mysite.com";

var url5 = url+s;

console.log(url5);

//JQUERY
/**
 * $.ajax({
 *  url:url,
 *  type:'post',
 *  data:
 *  });
 * 
 */
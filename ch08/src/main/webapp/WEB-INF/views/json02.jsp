<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script>
//DOM Load Event
//1. load (DOM, CSSOM, Image) 로딩
//2. DOMContentLoaded Dom 만 로딩(CSSOM X, img X)
window.addEventListener("load",function(){
	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		var xhr=null;
		
		if(window.ActiveXObject){ // 브라우저가 ActiveX 를 지원하면   (IE 9 부터 지원)
			xhr= new ActiveXObject("Microsoft.XMLHTTP");				
		}else{
			xhr=new XMLHttpRequest(); //standard Browser
		}
		
		
		xhr.addEventListener("readystatechange",function(){
			if(this.readyState == XMLHttpRequest.UNSET){
				// Request 가 초기화 되기전
				console.log("UNSET");
			}else if(this.readyState == XMLHttpRequest.OPENED){
				// 서버와 연결이 성공
				console.log("OPENED");
			}else if(this.readyState == XMLHttpRequest.HEADER_RECEIVED){
				//서버가 Request를 받음
				console.log("HEADER_RECEIVED");
			}else if(this.readyState == XMLHttpRequest.LOADING){
				// response 처리중
				console.log("LOADING");
			}else if(this.readyState == XMLHttpRequest.DONE){
				// response 처리가 끝남 (JSON 파싱 완료)
				console.log("DONE");
				
				if(this.status != 200){
					console.log("error : ",this.status);
					return;
				}
				
				console.log(this.responseText,typeof(this.responseText));
				var res = JSON.parse(this.responseText);
				console.log(res,typeof(res));
				
				var html="";
				html+=("<h1>"+res.data.no+"</h1>");
				html+=("<h2>"+res.data.name+"</h2>");
				html+=("<h2>"+res.data.message+"</h2>");
				
				document.getElementById("data").innerHTML+=(html);
			}
			
		});
		
		xhr.open("get","${pageContext.request.contextPath}/api/json",true);
		xhr.send();
		
	});
});
</script>
</head>
<body>
	<h1>AJAX Test Json Format Data : XML HTTP request 함수 사용하기</h1>
	
	<button>이 버튼을 누르면</button>
	<div id="data">받은 데이터</div>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
	$(function(){
		$("button").click(function(){
			var vo={
				name:"둘리",
				password:"1234",
				message:"호이~"
			};
			
			$.ajax({
				url:"${pageContext.request.contextPath}/api/post01",
				async:true,
				data:$.param(vo),	// 보내는 데이터
				type:"post", //요청타입
				dataType:"json", //응답 포맷
				contentType:"application/x-www-form-urlencoded", // default
				success:function(res){
					console.log(res);
					
					
					var html="";
					html+=("<h1>"+res.data.no+"</h1>");
					html+=("<h2>"+res.data.name+"</h2>");
					html+=("<h2>"+res.data.message+"</h2>");
					$("#data").append(html);
					return;					
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test : $.ajax POST Form 데이터 </h1>
	
	<button>이 버튼을 누르면</button>
	<div id="data">받은 데이터</div>
</body>
</html>
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
			$.ajax({
				url:"${pageContext.request.contextPath}/api/json",
				async:false,
				type:"get",
				dataType:"json",
				success:function(res){
					console.log(res.message);	
					
				
					var html="";
					html+=("<h1>"+res.data.no+"</h1>");
					html+=("<h2>"+res.data.name+"</h2>");
					html+=("<h2>"+res.data.message+"</h2>");
					
					
					$("#data").append(html);
					// Fetch  Ajax  Axios 
					
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test : $.ajax 함수 사용하기</h1>
	
	<button>이 버튼을 누르면</button>
	<div id="data">받은 데이터</div>
</body>
</html>
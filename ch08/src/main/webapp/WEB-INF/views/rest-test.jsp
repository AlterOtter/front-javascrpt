<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("#create").click(function(){
		var vo = {
				name:"둘리",
				email:"dooly@gamil.com",
				password:"1234",
				gender:"male"
		}
	
		$.ajax({
			url:"${pageContext.request.contextPath}/api/user",
			async:true,
			type:"post", //요청타입
			dataType:"json", //응답 포맷
			data:JSON.stringify(vo),	// 보내는 데이터
			contentType:"application/json", // default
			success:function(res){
				console.log(res);
				return;					
			}
		});
	});
	//===============================================================
	$("#read").click(function(){
		
	
		$.ajax({
			url:"${pageContext.request.contextPath}/api/user/10",
			async:true,
			type:"get", //요청타입
			dataType:"json", //응답 포맷
			contentType:"application/json", // default
			success:function(res){
				console.log(res);
				return;					
			}
		});
	});	
	//======================================================================
	$("#update").click(function(){
		var vo = {
				name:"둘리",
				email:"dooly@gamil.com",
				password:"1234",
				gender:"male"
		}
		
		$.ajax({
			url:"${pageContext.request.contextPath}/api/user/100000",
			async:true,
			type:"put", //요청타입
			dataType:"json", //응답 포맷
			data:JSON.stringify(vo),	// 보내는 데이터
			contentType:"application/json", // default
			success:function(res){
				console.log(res);
				return;					
			}
		});
	});	
	//======================================================================
	$("#delete").click(function(){
		var vo = {
				password:"1234",
		}
		
		$.ajax({
			url:"${pageContext.request.contextPath}/api/user/100000",
			async:true,
			type:"delete", //요청타입
			dataType:"json", //응답 포맷
			data:JSON.stringify(vo),	// 보내는 데이터
			contentType:"application/json", // default
			success:function(res){
				console.log(res);
				return;					
			}
		});
	});	
	
})
</script>
</head>
<body>
	<h1>AJAX Test : Restful API </h1>
	
	<button id="create">Create(POST)</button>
	<br></br>
	<button id="read">Read(Get)</button>
	<br></br>
	<button id="update">Update(Put)</button>
	<br></br>
	<button id="delete">delete(delete)</button>
	<br></br>
</body>
</html>
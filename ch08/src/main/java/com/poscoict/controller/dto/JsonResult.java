package com.poscoict.controller.dto;

public class JsonResult {
	private String result; /* "success"  of  "fail" */
	private Object data;  /* if success set */
	private String message;  /* if fail set */
	
	private JsonResult(String result,Object data) {
		this.result = result;
		this.data = data;
	}
	
	private JsonResult(String result,String message) {
		this.result = result;
		this.message = message;
	}
	
	public static JsonResult success(Object data) {
		return new JsonResult("sucess",data);
	}
	
	public static JsonResult fail(Object data) {
		return new JsonResult("fail",data);
	}
	
	
	public String getResult() {
		return result;
	}

	public Object getData() {
		return data;
	}

	public String getMessage() {
		return message;
	}

}

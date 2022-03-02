package com.poscoict.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.controller.dto.JsonResult;
import com.poscoict.controller.dto.XmlResult;
import com.poscoict.vo.GuestbookVO;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String test() {
		return "ㄹㄹ";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX연습<h1> <p>HTML 데이터 </p>";
	}
	
	@ResponseBody
	@RequestMapping("/json")
	public JsonResult json() {
		GuestbookVO vo = GuestbookVO.builder().no(1).name("크크크크킄").message("캬캬캬캬캬").build();
		return JsonResult.success(vo);
	}
	
	
	@ResponseBody
	@RequestMapping(value="/post01",method=RequestMethod.POST)
	public JsonResult post01(GuestbookVO vo) {
		System.out.println(vo);
		vo.setNo(1);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	
	@ResponseBody
	@RequestMapping(value="/post02",method=RequestMethod.POST)
	public JsonResult post02(@RequestBody GuestbookVO vo) {
		System.out.println(vo);
		vo.setNo(1);
//		vo.setName("둘리");
//		vo.setMessage("호이");
		vo.setPassword("흐으ㅡ믐ㄴ머");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/xml")
	public Object xml() {
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return XmlResult.success(vo);
	}
}

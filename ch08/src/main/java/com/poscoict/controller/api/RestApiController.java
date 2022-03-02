package com.poscoict.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscoict.controller.dto.JsonResult;
import com.poscoict.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class RestApiController {
	//swagger //Rest Docs
	//jira confluence
	@PostMapping("")
	public Object create(@RequestBody UserVo vo) {
		System.out.println("Start Create");
		vo.setNo(1);
		vo.setPassword("");
		return JsonResult.success(vo);
	}
	
	@GetMapping("")
	public Object Read() {
		System.out.println("Start Read");
		List<UserVo> list = new ArrayList<>();
		
		UserVo vo = UserVo.builder().no(2).name("샼러ㅑㅣ밈나ㅣㅜㅁㄴ디버ㅏㅈㄷㅈ").email("ㅑㅓㅣ;ㅁㄴ;ㅇㄹㄴ멀").role("사용자").build();
		UserVo vo2 = UserVo.builder().no(3).name("심리학박사").email("radio@radio.com").role("테스트").build();
		
		list.add(vo);
		list.add(vo2);
		return JsonResult.success(list);
	}
	
	@GetMapping("/{no}")
	public Object Read(@PathVariable("no") Integer no) {
		System.out.println("Start Read2");
		
		UserVo vo = UserVo.builder().no(no).name("호오옹이").email("이메일 일까요").role("나는 누구입니까").build();
		return JsonResult.success(vo);
	}
	
//	@Auth 체크해줘야한다....
	@PutMapping("/{no}")
	public Object update(@PathVariable("no") Integer no,@RequestBody UserVo vo) {
		System.out.println("Start Update");
		vo.setNo(no);
		return JsonResult.success(vo);
	}
	
	@DeleteMapping("/{no}")
	public Object delete(@RequestParam(value="password",required = false)String password,@PathVariable("no") Integer no) {
		System.out.println("Start Delete");
		System.out.println(no);
		System.out.println("password : "+password);
		return JsonResult.success(no);
	}	
	
}

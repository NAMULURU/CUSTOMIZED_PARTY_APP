package com.uncc.partystore.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Home {

	@RequestMapping("/homepage")
	public String welcome(Map<String, Object> model) {
		return "welcome";
	}
}
package com.uncc.partystore.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fasterxml.jackson.core.JsonProcessingException;

@Controller
public class Home {
	
	//@RequestMapping(value = { "/setup/map", "/setup/constrains", "/result/message", "results/*" })
	@RequestMapping(value = "/homepage")
	public String runOptimizationResult(Model model, HttpSession session)
			throws JsonProcessingException {
		return "index";
	}

	@RequestMapping("/homepages")
	public String welcome(Map<String, Object> model) {
		return "welcome";
	}
}
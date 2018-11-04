package com.uncc.partystore.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

import org.hibernate.transform.ToListResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.uncc.partystore.forms.Register;
import com.uncc.partystore.models.Authorities;
import com.uncc.partystore.models.Geography;
import com.uncc.partystore.models.UserDetails;
import com.uncc.partystore.models.Users;
import com.uncc.partystore.repository.AuthoritiesRepo;
import com.uncc.partystore.repository.GeographyRepo;
import com.uncc.partystore.repository.UserDetailsRepo;
import com.uncc.partystore.repository.UsersRepo;

@Controller
public class Home {

	@Autowired
	AuthoritiesRepo authoritiesRepo;

	@Autowired
	GeographyRepo geographyRepo;

	@Autowired
	UserDetailsRepo userDetailsRepo;

	@Autowired
	UsersRepo usersRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@RequestMapping(value = "/xx/register")
	public String runOptimizationResult(Model model, HttpSession session) throws JsonProcessingException {
		return "index";
	}

	@RequestMapping(value = "/register-user", method = RequestMethod.POST)
	@ResponseBody
	@CrossOrigin("http://localhost:3000")
	//@CrossOrigin("http://localhost:9090")
	public HashMap<String, String> registerUser(@RequestBody Register user) {

		UserDetails userDetails = new UserDetails();
		userDetails.setFirstName(user.getFirstname());
		userDetails.setLastName(user.getLastname());
		userDetails.setEmail(user.getEmail());
		userDetails.setCity(user.getCity());
		userDetails.setState(user.getState());
		userDetails.setZipcode(user.getZipcode());
		userDetails.setAddressLine1(user.getAddress1());
		userDetails.setAddressLine2(user.getAddress2());

		Users users = new Users();
		users.setUsername(user.getEmail());
		users.setPassword(passwordEncoder.encode(user.getPassword()));
		users.setEnabled(1);

		Authorities authorities = new Authorities();
		authorities.setAuthority("ROLE_USER");
		authorities.setUsername(user.getEmail());

		HashMap<String, String> map = new HashMap<String, String>();

		try {
			if(userDetailsRepo.isUserExists(user.getEmail()) != null) {
				map.put("response", "USER_ID_EXISTS");
				return map;
			}
			
			userDetailsRepo.save(userDetails);
			usersRepo.save(users);
			authoritiesRepo.save(authorities);

			map.put("response", "SUCCESS");
		} catch (Exception e) {
			map.put("response", "INTERNAL_FAILURE");
			e.printStackTrace();
		}

		return map;

	}
	
	@RequestMapping(value = "/geo-list", method = RequestMethod.GET)
	@ResponseBody
	@CrossOrigin("http://localhost:3000")
	//@CrossOrigin("http://localhost:9090")
	public HashMap<String, Set<String>> getGeography(){
		
		List<Geography> geographies = (List<Geography>) geographyRepo.findAll();
		
		HashMap<String, Set<String>> geoList = (HashMap<String, Set<String>>) geographies.stream().collect(
                Collectors.groupingBy(Geography::getState, Collectors.mapping(Geography::getCity, Collectors.toSet())));
		
		return geoList;
		
	}
}
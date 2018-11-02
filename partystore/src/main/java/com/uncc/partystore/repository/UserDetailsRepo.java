package com.uncc.partystore.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.uncc.partystore.models.UserDetails;

public interface UserDetailsRepo extends CrudRepository<UserDetails, Long>{
	
	@Query("select ud.email from UserDetails ud where ud.email= :email")
	public String isUserExists(@Param("email") String email);

}

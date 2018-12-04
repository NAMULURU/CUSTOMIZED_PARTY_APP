package com.uncc.partystore.repository;

import org.springframework.data.repository.CrudRepository;

import com.uncc.partystore.models.CustomCart;

public interface CustomCartInfo extends CrudRepository<CustomCart, Long>{
	
	

}

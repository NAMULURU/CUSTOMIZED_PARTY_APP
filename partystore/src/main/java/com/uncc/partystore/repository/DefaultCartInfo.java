package com.uncc.partystore.repository;

import org.springframework.data.repository.CrudRepository;

import com.uncc.partystore.models.DefaultCart;

public interface DefaultCartInfo extends CrudRepository<DefaultCart, Long>{
	
	

}

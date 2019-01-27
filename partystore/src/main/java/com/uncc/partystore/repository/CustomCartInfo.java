package com.uncc.partystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.uncc.partystore.models.CustomCart;

public interface CustomCartInfo extends CrudRepository<CustomCart, Long>{
	
	@Query(value="select * from custom_cart where email= :email", nativeQuery=true)
	public List<CustomCart> getCustomCartInfoByEmail(@Param("email") String email);

}

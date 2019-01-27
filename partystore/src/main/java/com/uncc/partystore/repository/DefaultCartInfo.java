package com.uncc.partystore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.uncc.partystore.models.DefaultCart;

public interface DefaultCartInfo extends CrudRepository<DefaultCart, Long>{
	
	@Query(value="select * from default_cart where email= :email", nativeQuery=true)
	public List<DefaultCart> getDefaultCartInfoByEmail(@Param("email") String email);

}

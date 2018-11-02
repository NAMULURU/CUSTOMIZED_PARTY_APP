package com.uncc.partystore.repository;

import org.springframework.data.repository.CrudRepository;

import com.uncc.partystore.models.Users;

public interface UsersRepo extends CrudRepository<Users, Long>{
}

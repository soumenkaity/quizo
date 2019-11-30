package com.stackroute.hrservice.repository;

import com.stackroute.hrservice.model.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Integer> {
  Optional<UserLogin> findByUsername(String username);
  Optional<UserLogin> findByEmail(String email);
}

package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.UserLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLoginRepository extends JpaRepository<UserLogin, Integer> {
  Optional<UserLogin> findByUsername(String username);
  Optional<UserLogin> findByEmail(String email);
}

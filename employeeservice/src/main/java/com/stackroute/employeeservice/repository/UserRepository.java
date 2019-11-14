package com.stackroute.dashboard.repository;

import com.stackroute.dashboard.domain.DashboardUser;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface UserRepository extends MongoRepository<DashboardUser,Integer> {
}

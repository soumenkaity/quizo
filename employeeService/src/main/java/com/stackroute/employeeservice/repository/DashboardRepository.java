package com.stackroute.employeeservice.repository;

import com.stackroute.employeeservice.domain.DashboardItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DashboardRepository extends MongoRepository<DashboardItem,Integer> {
}

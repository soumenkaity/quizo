package com.stackroute.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.stackroute.domain.Hr;

public interface HrRepository extends MongoRepository<Hr,String> {
}

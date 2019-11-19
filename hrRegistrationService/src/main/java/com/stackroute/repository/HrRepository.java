package com.stackroute.repository;

import com.stackroute.domain.Hr;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HrRepository extends MongoRepository<Hr,String> {
}

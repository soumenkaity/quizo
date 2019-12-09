package com.stackroute.adminService.repository;

import com.stackroute.adminService.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact,String> {
}

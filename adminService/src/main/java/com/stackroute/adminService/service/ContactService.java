package com.stackroute.adminService.service;

import com.stackroute.adminService.model.Contact;
import com.stackroute.adminService.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    private ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> GetAllContact() {
        return contactRepository.findAll();
    }

}

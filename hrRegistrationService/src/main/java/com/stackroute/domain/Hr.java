package com.stackroute.domain;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Document
public class Hr {
    @Id
    private String id;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String name;
    private long mobileNo;
    private String emailId;
    private String company;
    private String password;

    public Hr() {
    }

    public Hr(String id, String name, long mobileNo, String emailId, String company, String password) {
        this.id = id;
        this.name = name;
        this.mobileNo = mobileNo;
        this.emailId = emailId;
        this.company = company;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(long mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

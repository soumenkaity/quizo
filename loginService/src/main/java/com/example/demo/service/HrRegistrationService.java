package com.example.demo.service;

import com.example.demo.domain.Hr;

import java.util.List;

public interface HrRegistrationService {
    public Hr saveHr(Hr Hr);
    public List<Hr> getAllHrs();
}

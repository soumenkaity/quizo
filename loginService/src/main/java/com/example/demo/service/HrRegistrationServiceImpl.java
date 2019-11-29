package com.example.demo.service;

import com.example.demo.domain.Hr;
import com.example.demo.repository.HrRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class HrRegistrationServiceImpl implements HrRegistrationService {
    @Autowired
    private HrRepository hrRepository;

    public HrRegistrationServiceImpl(HrRepository hrRepository) {
        this.hrRepository = hrRepository;
    }

    @Override
    public Hr saveHr(Hr Hr) {
        return hrRepository.save(Hr);
    }

    @Override
    public List<Hr> getAllHrs() {
        return hrRepository.findAll();
    }
}

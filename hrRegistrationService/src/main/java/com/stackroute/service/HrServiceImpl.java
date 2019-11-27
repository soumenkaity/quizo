package com.stackroute.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.stackroute.domain.Hr;
import com.stackroute.repository.HrRepository;

import java.util.List;




@Service
public class HrServiceImpl implements HrService {
    private HrRepository hrRepository;


    @Autowired
    public HrServiceImpl(HrRepository hrrepository) {
        this.hrRepository = hrrepository;
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

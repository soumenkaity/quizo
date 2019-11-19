package com.stackroute.service;

import com.stackroute.domain.Hr;
import com.stackroute.repository.HrRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class HrServiceImpl implements HrService {
    HrRepository hrrepository;


    @Autowired
    public HrServiceImpl(HrRepository hrrepository) {
        this.hrrepository = hrrepository;
    }

    @Override
    public Hr saveHr(Hr hr) {
        com.stackroute.domain.Hr hr1=hrrepository.save(hr);
        return hr1;
    }

    @Override
    public List<Hr> getAllHrs() {
        return hrrepository.findAll();
    }
}

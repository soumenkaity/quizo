package com.stackroute.service;

import com.stackroute.domain.Hr;

import java.util.List;

public interface HrService {
    public Hr saveHr(Hr Hr);
    public List<Hr> getAllHrs();
}

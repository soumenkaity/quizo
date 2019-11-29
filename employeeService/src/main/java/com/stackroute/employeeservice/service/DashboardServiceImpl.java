package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.DashboardItem;
import com.stackroute.employeeservice.repository.DashboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardServiceImpl implements DashboardService {
    DashboardRepository dashboardRepository;

    @Autowired
    public DashboardServiceImpl(DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;
    }

    @Override
    public DashboardItem saveDashboardUser(DashboardItem dashboarduser) {
        return dashboardRepository.save(dashboarduser);
           }

    @Override
    public List<DashboardItem> getAllDashboardUser() {
        return dashboardRepository.findAll();
    }

    @Override
    public DashboardItem deleteDashboardItem(DashboardItem dashboardItem) {
     DashboardItem tempDashboardItem = dashboardItem;
     dashboardRepository.delete(dashboardItem);
     return tempDashboardItem;

    }
}

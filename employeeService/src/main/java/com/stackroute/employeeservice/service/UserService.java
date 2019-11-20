package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.DashboardItem;

import java.util.List;

public interface UserService {
    public DashboardItem saveDashboardUser(DashboardItem dashboarduser);
    public List<DashboardItem> getAllDashboardUser();
    public DashboardItem deleteDashboardItem(DashboardItem dashboardItem);
}

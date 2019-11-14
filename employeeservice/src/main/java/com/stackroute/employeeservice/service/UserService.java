package com.stackroute.dashboard.service;

import com.stackroute.dashboard.domain.DashboardUser;

import java.util.List;

public interface UserService {
    public DashboardUser saveDashboardUser(DashboardUser dashboarduser);
    public List<DashboardUser> getAllDashboardUser();
    public void deleteUser(int userid);
}

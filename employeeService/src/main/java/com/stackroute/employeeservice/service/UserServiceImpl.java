package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.DashboardItem;
import com.stackroute.employeeservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public DashboardItem saveDashboardUser(DashboardItem dashboarduser) {
        return userRepository.save(dashboarduser);
           }

    @Override
    public List<DashboardItem> getAllDashboardUser() {
        return userRepository.findAll();
    }

    @Override
    public DashboardItem deleteDashboardItem(DashboardItem dashboardItem) {
     DashboardItem tempDashboardItem = dashboardItem;
     userRepository.delete(dashboardItem);
     return tempDashboardItem;

    }
}

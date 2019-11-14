package com.stackroute.dashboard.service;

import com.stackroute.dashboard.domain.DashboardUser;
import com.stackroute.dashboard.repository.UserRepository;
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
    public DashboardUser saveDashboardUser(DashboardUser dashboarduser) {
        return userRepository.save(dashboarduser);
           }

    @Override
    public List<DashboardUser> getAllDashboardUser() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(int userid) {
     userRepository.deleteById(userid);
    }
}

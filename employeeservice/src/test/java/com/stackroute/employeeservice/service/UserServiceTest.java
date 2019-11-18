package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.DashboardItem;
import com.stackroute.employeeservice.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Matchers;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class UserServiceTest {
    private DashboardItem dashboardItem;

    //Create a mock for UserRepository
    @Mock
    private UserRepository userRepository;

    //Inject the mocks as dependencies into UserServiceImpl
    @InjectMocks
    private UserService userService = new UserServiceImpl(userRepository);
    List<DashboardItem> list= null;

    @Before
    public void setUp(){
        //Initialising the mock object
        MockitoAnnotations.initMocks(this);
        dashboardItem = new DashboardItem();
        dashboardItem.set_id("5dca5b58eb6ffd1e13f10504");
        dashboardItem.setEmployeename("shahrukh khan");
        dashboardItem.set_testid(12);
        dashboardItem.setTestname("java");
        dashboardItem.setEmployeescore(50);
        list = new ArrayList<>();
        list.add(dashboardItem);
    }

    @Test
    public void getAllDashboardUsers() {
        userRepository.save(dashboardItem);
        //stubbing the mock to return specific data
        when(userRepository.findAll()).thenReturn(list);
        List<DashboardItem> dashboardItemList = userService.getAllDashboardUser();
        assertEquals(list, dashboardItemList);
    }

    @Test
    public void saveDashboardUser() {

        when(userRepository.save(dashboardItem)).thenReturn(dashboardItem);
        DashboardItem savedUser = userService.saveDashboardUser(dashboardItem);
        assertEquals(dashboardItem,savedUser);
    }

    @Test
    public  void deleteUserSuccess() {
        when(userRepository.findOne(Matchers.any())).thenReturn(Optional.ofNullable(dashboardItem));
        DashboardItem deleteUser = userService.deleteDashboardItem(dashboardItem);
        assertEquals(dashboardItem, deleteUser);
        verify(userRepository,times(1)).delete((deleteUser));
    }





}

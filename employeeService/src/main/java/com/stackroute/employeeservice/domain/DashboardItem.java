package com.stackroute.employeeservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class DashboardItem {
    @Id
    private String _id;
    private String employeename;
    private String testname;
    private int _testid;
    private String _employeeId;
    private int employeescore;

    public DashboardItem(String _id, String employeename, String testname, int _testid, String _employeeId, int employeescore) {
        this._id = _id;
        this.employeename = employeename;
        this.testname = testname;
        this._testid = _testid;
        this._employeeId = _employeeId;
        this.employeescore = employeescore;
    }

    public DashboardItem() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getEmployeename() {
        return employeename;
    }

    public void setEmployeename(String employeename) {
        this.employeename = employeename;
    }

    public String getTestname() {
        return testname;
    }

    public void setTestname(String testname) {
        this.testname = testname;
    }

    public int get_testid() {
        return _testid;
    }

    public void set_testid(int _testid) {
        this._testid = _testid;
    }

    public String get_employeeId() {
        return _employeeId;
    }

    public void set_employeeId(String _employeeId) {
        this._employeeId = _employeeId;
    }

    public int getEmployeescore() {
        return employeescore;
    }

    public void setEmployeescore(int employeescore) {
        this.employeescore = employeescore;
    }
}

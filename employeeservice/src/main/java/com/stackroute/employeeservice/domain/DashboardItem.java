package com.stackroute.employeeservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class DashboardUser {
    public String get_employeeid() {
        return _employeeid;
    }

    public void set_employeeid(String _employeeid) {
        this._employeeid = _employeeid;
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

    public int getEmployeescore() {
        return employeescore;
    }

    public void setEmployeescore(int employeescore) {
        this.employeescore = employeescore;
    }

    @Id
    private String _employeeid;
    private String employeename;
    private String testname;
    private int _testid;
    private int employeescore;


}

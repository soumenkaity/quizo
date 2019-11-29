package com.stackroute.employeeservice.exception;


public class TestResultNotFoundException extends Exception{
    private String message;

    public TestResultNotFoundException() {}
    public TestResultNotFoundException(String message){
        super(message);
        this.message=message;
    }
}

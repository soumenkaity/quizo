package com.stackroute.employeeservice.exception;

public class QuestionNotFoundException extends Exception{
    private  String message;

    public QuestionNotFoundException() {}
    public  QuestionNotFoundException(String message){
        super(message);
        this.message=message;
    }

}


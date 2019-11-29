package com.stackroute.employeeservice.domain;


public class Response {
    private String id;
    private int option;
    private int correctOption;
    private boolean userResponse;

    public Response(String id, int option, int correctOption, boolean userResponse) {
        this.id = id;
        this.option = option;
        this.correctOption = correctOption;
        this.userResponse = userResponse;
    }

    public Response() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getOption() {
        return option;
    }

    public void setOption(int option) {
        this.option = option;
    }

    public int getCorrectOption() {
        return correctOption;
    }

    public void setCorrectOption(int correctOption) {
        this.correctOption = correctOption;
    }

    public boolean isUserResponse() {
        return userResponse;
    }

    public void setUserResponse(boolean userResponse) {
        this.userResponse = userResponse;
    }
}

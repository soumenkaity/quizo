package com.stackroute.employeeservice.service;

import com.stackroute.employeeservice.domain.Response;
import com.stackroute.employeeservice.domain.TestResult;
import com.stackroute.employeeservice.exception.TestResultNotFoundException;
import com.stackroute.employeeservice.repository.TestResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestResultServiceImpl implements TestResultService {
    private TestResultRepository testResultRepository;

    @Autowired
    public TestResultServiceImpl(TestResultRepository testResultRepository) {
        this.testResultRepository = testResultRepository;
    }

    @Override
    public TestResult saveTestResult(TestResult testResult) {
        TestResult savedTestResult = testResultRepository.save(testResult);
        return savedTestResult;
    }

    @Override
    public List<TestResult> getAllTestResults() {
        return testResultRepository.findAll();
    }

    @Override
    public TestResult getTestResultByTestId(String testId) throws TestResultNotFoundException {
        return testResultRepository.findById(testId).orElseThrow(() -> new TestResultNotFoundException("No Tests were found with such Test Id"));
    }

    @Override
    public List<TestResult> getAllTestResultsByEmployeeId(String employeeId) throws TestResultNotFoundException{
        List<TestResult> testResultList = testResultRepository.findByEmployeeId(employeeId);
        if(testResultList.size()==0){
            throw new TestResultNotFoundException("No Tests were found with such Employee Id");
        }
        return testResultList;
    }

    @Override
    public void deleteAllTestResults() throws TestResultNotFoundException {
        testResultRepository.deleteAll();

    }

    @Override
    public TestResult deleteTestResultByTestId(String testId) throws TestResultNotFoundException {

        TestResult deletedTestResult = testResultRepository.findById(testId).orElseThrow(() -> new TestResultNotFoundException("No Tests were found with such Test Id"));
        testResultRepository.deleteById(testId);
        return deletedTestResult;
    }

    @Override
    public List<TestResult> deleteAllTestResultsByEmployeeId(String employeeId) throws TestResultNotFoundException {
        List<TestResult> deletedTestResultList = testResultRepository.findByEmployeeId(employeeId);
        testResultRepository.deleteByEmployeeId(employeeId);
        return deletedTestResultList;
    }

}

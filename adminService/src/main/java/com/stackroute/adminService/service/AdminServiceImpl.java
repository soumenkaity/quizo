package com.stackroute.adminService.service;

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService{

    @Override
    public int  createTest(String topic) throws IOException {
        int value=4;
        Process process;
        try {
            //these commands will run the script file
            String[] cmd = { "sh", "/home/ubuntu/adaptive-quiz-engine/automatic-question-generation/QuestionGeneration/runscript.sh", topic};
            process = Runtime.getRuntime().exec(cmd);

            //this will print the terminal logs in console during program execution
            BufferedReader reader=new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            process.waitFor();
            value = process.exitValue();
            System.out.println("After waitfor() exit value is: " +value);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            value=5;
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            value=6;
        }
        catch(Exception e){
            e.printStackTrace();
            value=7;
        }

        return value;
    }
}

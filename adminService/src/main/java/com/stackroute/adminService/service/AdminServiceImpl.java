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

        //creates a new process
        Process p;
        try {

            //these commands will run the script file
            String[] cmd = { "sh", "/home/cgi/Documents/question-generation/QuestionGeneration/runscript.sh", topic};
            p = Runtime.getRuntime().exec(cmd);

            //this will print the terminal logs in console during program execution
            BufferedReader reader=new BufferedReader(new InputStreamReader(
                    p.getInputStream()));
            String line;
            while((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            //this will wait for the process p to be terminated
            p.waitFor();

            //the python program returns the exit value which tells about the different outputs that program gives
            value=p.exitValue();
            System.out.println("After waitFor() exit value is : " +value);
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

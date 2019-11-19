package com.stackroute.controller;


import com.stackroute.domain.Hr;
import com.stackroute.service.HrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin("*")
public class HrController {
    private HrService hrService;
    private  ResponseEntity responseEntity;

    @Autowired
    public HrController(HrService hrService) {
        this.hrService = hrService;
    }

    @PostMapping("hr")
    public ResponseEntity<?> saveHr(@RequestBody Hr hr){

            hrService.saveHr(hr);
            responseEntity=new ResponseEntity("Successfully Created", HttpStatus.CREATED);

        return responseEntity;
    }
    @GetMapping("hr")
    public ResponseEntity<?> getAllHrs() {
        return new ResponseEntity<List<Hr>>(hrService.getAllHrs(), HttpStatus.OK);
    }
}

package com.example.demo.controller;

import com.example.demo.model.AppUser;
import com.example.demo.model.Cases;
import com.example.demo.model.Country;
import com.example.demo.model.Graph;
import com.example.demo.services.CoronaServices;
import com.example.demo.services.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
@RequiredArgsConstructor
public class CasesController {
    @Autowired
    private final CoronaServices coronaServices;

    @GetMapping("/")
    public ResponseEntity<List<Cases>> GetCases(){
        return ResponseEntity.ok().body(coronaServices.loadAllData());
    }
    @GetMapping("/countries")
    public ResponseEntity<List<Country>> GetCountries(){
        return ResponseEntity.ok().body(coronaServices.loadAllCountries());
    }
    @PostMapping("/graph")
    public ResponseEntity<List<Cases>> GetCasesDate(@RequestBody Graph body){
        return ResponseEntity.ok().body(coronaServices.getGraphData(body.getCountry(), body.getStartDate(), body.getEndDate()));
    }




}

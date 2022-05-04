package com.example.demo.controller;

import com.example.demo.model.AppUser;
import com.example.demo.model.Cases;
import com.example.demo.model.Country;
import com.example.demo.services.CoronaServices;
import com.example.demo.services.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    @GetMapping("/{year}/{month}")
    public ResponseEntity<List<Cases>> GetCasesDate(@PathVariable("year") long year, @PathVariable("month") long month){
        return ResponseEntity.ok().body(coronaServices.loadCaseDate(month,year));
    }
    @GetMapping("/bycountry/{country}")
    public ResponseEntity<List<Cases>> GetCasesCountry(@PathVariable("country") String country){
        return ResponseEntity.ok().body(coronaServices.loadCaseCountry(country));
    }



}

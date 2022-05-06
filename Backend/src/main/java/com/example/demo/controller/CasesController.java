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
// /api/cases+/  [Get]
    @GetMapping("/")
    public ResponseEntity<List<Cases>> GetCases(){
        return ResponseEntity.ok().body(coronaServices.loadAllData());
    }
   // /api/cases + /countries [Get]
    @GetMapping("/countries")
    public ResponseEntity<List<Country>> GetCountries(){
        return ResponseEntity.ok().body(coronaServices.loadAllCountries());
    }


}

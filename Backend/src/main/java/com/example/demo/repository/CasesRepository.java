package com.example.demo.repository;

import com.example.demo.model.Cases;
import com.example.demo.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CasesRepository extends JpaRepository<Cases,Long> {
    @Override
    List<Cases> findAll();

    @Query(value = "SELECT * from cases INNER JOIN date ON cases.date_id = date.date_id  INNER JOIN country ON cases.country_id=country.country_id WHERE date.month=?1 AND date.year=?2", nativeQuery = true)
    List<Cases> findCasesByDate(long month,long year);
    @Query(value = "SELECT * from cases INNER JOIN date ON cases.date_id = date.date_id  INNER JOIN country ON cases.country_id=country.country_id WHERE country.country=?1", nativeQuery = true)
    List<Cases> findCasesByCountry(String country);
}

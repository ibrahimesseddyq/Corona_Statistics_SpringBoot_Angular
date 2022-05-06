package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cases")
public class Cases {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long case_id;
    @ManyToOne

    @JoinColumn(name = "country_id")
    Country country;


    @ManyToOne

    @JoinColumn(name = "date_id")
    Date date;

    @Column
    Long caseno;
    @Column
    Long deathno;
}
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

/**
 *
 * @author josue
 */
@Entity
@Data
public class Dia {
    @Id
    @Column (name = "id_dia")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_dia;
    @Column (name = "cod_dia")
    private String cod_dia;
    @Column (name = "dia_letras")
    private String dia_letras;
}

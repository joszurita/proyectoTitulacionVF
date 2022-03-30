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
public class Anio {
    @Id
    @Column (name = "id_anio")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_anio;
    @Column (name = "cod_anio")
    private String cod_anio;
    @Column (name = "anio_letras")
    private String anio_letras;
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
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
public class Carrera {

    @Id
    @Column (name = "id_carrera")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_carrera;
    @Column (name = "cod_carrera")
    private String cod_carrera;
    @Column (name = "nombre_carrera")
    private String nombre_carrera;
    @Column (name = "titulo_obtenido")
    private String titulo_obtenido;
}

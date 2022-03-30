/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id_estudiante")
    private Long id_estudiante;
    @Column (name = "cedula")
    private String cedula;
    @Column (name = "apellidos")
    private String apellidos;
    @Column (name = "nombres")
    private String nombres;
    @Column (name = "id_carrera")
    private Integer id_carrera;
}

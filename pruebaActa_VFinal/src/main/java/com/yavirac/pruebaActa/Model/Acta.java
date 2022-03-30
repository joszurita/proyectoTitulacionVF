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
public class Acta {
    @Id
    @Column (name = "numero_acta")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numero_acta;
    @Column (name = "id_anio")
    private Integer id_anio;
    @Column (name = "id_mes")
    private Integer id_mes;
    @Column (name = "id_dia")
    private Integer id_dia;
    @Column (name = "id_estudiante")
    private Integer id_estudiante;
    private String presidente;
    private String vocal1;
    private String vocal2;
    
}

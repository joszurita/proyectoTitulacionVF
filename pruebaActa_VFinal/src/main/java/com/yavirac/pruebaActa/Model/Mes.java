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
public class Mes {
    @Id
    @Column (name = "id_mes")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_mes;
    @Column (name = "cod_mes")
    private String cod_mes;
    @Column (name = "mes_letras")
    private String mes_letras;    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Repository;

import com.yavirac.pruebaActa.Model.Usuario;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author julyo
 */
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
    
    List<Usuario> findAll();
}
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yavirac.pruebaActa.Repository;

import com.yavirac.pruebaActa.Model.Acta;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author josue
 */
public interface ActaRepository extends CrudRepository<Acta, Long>{
    
    List<Acta> findAll();
}

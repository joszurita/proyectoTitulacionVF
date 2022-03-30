/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Mes;
import com.yavirac.pruebaActa.Repository.MesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author josue
 */
@Service
public class MesService {
    @Autowired
    MesRepository mesRepository;
    
    public List<Mes> findAll(){
        return mesRepository.findAll();
    }
     /**Read*/
    public Mes findById(Long id)
    {
        return mesRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Mes save(Mes mes)
    {
        return mesRepository.save(mes);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        mesRepository.deleteById(id);
    }    
}

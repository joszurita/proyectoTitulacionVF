/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Anio;
import com.yavirac.pruebaActa.Repository.AnioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author josue
 */
@Service
public class AnioService {
    @Autowired
    AnioRepository anioRepository;
    
    public List<Anio> findAll(){
        return anioRepository.findAll();
    }
     /**Read*/
    public Anio findById(Long id)
    {
        return anioRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Anio save(Anio anio)
    {
        return anioRepository.save(anio);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        anioRepository.deleteById(id);
    }
}

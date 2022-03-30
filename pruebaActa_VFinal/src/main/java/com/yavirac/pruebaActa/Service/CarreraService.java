/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Carrera;
import com.yavirac.pruebaActa.Repository.CarreraRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author josue
 */
@Service
public class CarreraService {
    @Autowired
    CarreraRepository carreraRepository;
    
    public List<Carrera> findAll(){
        return carreraRepository.findAll();
    }
     /**Read*/
    public Carrera findById(Long id)
    {
        return carreraRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Carrera save(Carrera carrera)
    {
        return carreraRepository.save(carrera);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        carreraRepository.deleteById(id);
    }
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Estudiante;
import com.yavirac.pruebaActa.Repository.EstudianteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author josue
 */
@Service
public class EstudianteService {
        @Autowired
        EstudianteRepository estudianteRepository;
    
        public List<Estudiante> findAll(){
        return estudianteRepository.findAll();
    }
     /**Read*/
    public Estudiante findById(Long id)
    {
        return estudianteRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Estudiante save(Estudiante estudiante)
    {
        return estudianteRepository.save(estudiante);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        estudianteRepository.deleteById(id);
    }
    
    
}

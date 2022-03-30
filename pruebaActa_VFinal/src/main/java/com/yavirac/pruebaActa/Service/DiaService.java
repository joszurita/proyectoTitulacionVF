/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Dia;
import com.yavirac.pruebaActa.Repository.DiaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author josue
 */
@Service
public class DiaService {
      @Autowired
    DiaRepository diaRepository;
    
    public List<Dia> findAll(){
        return diaRepository.findAll();
    }
     /**Read*/
    public Dia findById(Long id)
    {
        return diaRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Dia save(Dia dia)
    {
        return diaRepository.save(dia);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        diaRepository.deleteById(id);
    }
}

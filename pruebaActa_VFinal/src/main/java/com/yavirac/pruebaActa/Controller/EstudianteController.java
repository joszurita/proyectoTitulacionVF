/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Estudiante;
import com.yavirac.pruebaActa.Service.EstudianteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author josue
 */
@RestController
@RequestMapping("/estudiante")
public class EstudianteController {
    @Autowired
    EstudianteService estudianteService;
    
        @GetMapping({"/lista","","/"})
    public List<Estudiante> findAll()
    {
        return estudianteService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Estudiante findById(@PathVariable long id)
    {
        return estudianteService.findById(id);
    }
    /**Create*/ 
    @PostMapping("/save")
    public Estudiante save(@RequestBody Estudiante estudiante)
    {
        return estudianteService.save(estudiante);
    }
    //Update 
    @PutMapping("/update/{id}")
    public Estudiante update(@PathVariable long id, @RequestBody Estudiante est)
    {
        Estudiante estudianteAux = estudianteService.findById(id);
        estudianteAux.setCedula(est.getCedula());
        estudianteAux.setApellidos(est.getApellidos());
        estudianteAux.setNombres(est.getNombres());
        estudianteAux.setId_carrera(est.getId_carrera());
        return estudianteService.save(estudianteAux);
    }
    
    //Delete 
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id)
    {
        estudianteService.deleteById(id);
    }
}

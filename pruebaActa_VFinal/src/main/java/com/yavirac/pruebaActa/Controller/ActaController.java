/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Acta;
import com.yavirac.pruebaActa.Service.ActaService;
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
@RequestMapping("/acta")
public class ActaController {
    @Autowired
    ActaService actaService;
    
        @GetMapping({"/lista","","/"})
    public List<Acta> findAll()
    {
        return actaService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Acta findById(@PathVariable long id)
    {
        return actaService.findById(id);
    }
    /**Create*/ 
    @PostMapping("/save")
    public Acta save(@RequestBody Acta acta)
    {
        return actaService.save(acta);
    }
    /**Update 
    @PutMapping("/update")
    public Acta update(@RequestBody Acta acta)
    {
        return actaService.save(acta);
    }
    
    /**Delete 
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id)
    {
        actaService.deleteById(id);
    }*/
}

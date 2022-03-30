/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Dia;
import com.yavirac.pruebaActa.Service.DiaService;
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
@RequestMapping("/dia")
public class DiaController {
     @Autowired
    DiaService diaService;
    
        @GetMapping({"/lista","","/"})
    public List<Dia> findAll()
    {
        return diaService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Dia findById(@PathVariable long id)
    {
        return diaService.findById(id);
    }
    /**Create*/ 
    @PostMapping("/save")
    public Dia save(@RequestBody Dia dia)
    {
        return diaService.save(dia);
    }
}

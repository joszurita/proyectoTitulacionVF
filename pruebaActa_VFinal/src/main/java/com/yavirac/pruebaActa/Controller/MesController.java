/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Mes;
import com.yavirac.pruebaActa.Service.MesService;
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
@RequestMapping("/mes")
public class MesController {
         @Autowired
    MesService mesService;
    
        @GetMapping({"/lista","","/"})
    public List<Mes> findAll()
    {
        return mesService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Mes findById(@PathVariable long id)
    {
        return mesService.findById(id);
    }
    /**Create*/ 
    @PostMapping("/save")
    public Mes save(@RequestBody Mes mes)
    {
        return mesService.save(mes);
    }
}

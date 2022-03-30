/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Anio;
import com.yavirac.pruebaActa.Service.AnioService;
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
@RequestMapping("/anio")
public class AnioController {
      @Autowired
    AnioService anioService;
    
        @GetMapping({"/lista","","/"})
    public List<Anio> findAll()
    {
        return anioService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Anio findById(@PathVariable long id)
    {
        return anioService.findById(id);
    }
    /**Create*/ 
    @PostMapping("/save")
    public Anio save(@RequestBody Anio anio)
    {
        return anioService.save(anio);
    }
}

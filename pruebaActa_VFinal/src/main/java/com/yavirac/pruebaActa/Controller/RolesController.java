/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Roles;
import com.yavirac.pruebaActa.Service.RolesService;
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
@RequestMapping("/roles")
public class RolesController {
     @Autowired
    RolesService rolesService;
    
        @GetMapping({"/lista","","/"})
    public List<Roles> findAll()
    {
        return rolesService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Roles findById(@PathVariable long id)
    {
        return rolesService.findById(id);
    }
    /**Create*/ 
    @PostMapping("/save")
    public Roles save(@RequestBody Roles roles)
    {
        return rolesService.save(roles);
    }
}

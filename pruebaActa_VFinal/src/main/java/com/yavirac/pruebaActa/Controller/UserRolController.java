/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.UserRole;
import com.yavirac.pruebaActa.Service.UserRolService;
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
@RequestMapping("/userrol")
public class UserRolController {
     @Autowired
    UserRolService userrolService;
    
        @GetMapping({"/lista","","/"})
    public List<UserRole> findAll()
    {
        return userrolService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public UserRole findById(@PathVariable long id)
    {
        return userrolService.findById(id);
    }
    
    @GetMapping("/user/{id_user}")
    public UserRole findByIdUser(@PathVariable long id_user){
        UserRole urol = new UserRole();
        List<UserRole> userrole = userrolService.findAll();
        
        for(UserRole ur: userrole){
            if(ur.getId_user() == id_user){
                urol = ur;
            }
        }
        return urol;
    }
    /**Create*/ 
    @PostMapping("/save")
    public UserRole save(@RequestBody UserRole userrol)
    {
        return userrolService.save(userrol);
    }
    
    
    
    
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id)
    {
        userrolService.deleteById(id);
    }
    
        @PutMapping("/update/{id}")
    public UserRole update(@PathVariable long id, @RequestBody UserRole usrol)
    {
        UserRole userroleAux = userrolService.findById(id);
        userroleAux.setId_role(usrol.getId_role());
        userroleAux.setId_user(usrol.getId_user());
        return userrolService.save(userroleAux);
    }
    
}

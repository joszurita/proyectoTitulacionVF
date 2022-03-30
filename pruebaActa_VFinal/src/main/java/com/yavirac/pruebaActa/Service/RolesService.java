/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Roles;
import com.yavirac.pruebaActa.Repository.RolesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 *
 * @author josue
 */
@Service
public class RolesService {
      @Autowired
    RolesRepository rolesRepository;
    
    public List<Roles> findAll(){
        return rolesRepository.findAll();
    }
     /**Read*/
    public Roles findById(Long id)
    {
        return rolesRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Roles save(Roles roles)
    {
        return rolesRepository.save(roles);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        rolesRepository.deleteById(id);
    }
}

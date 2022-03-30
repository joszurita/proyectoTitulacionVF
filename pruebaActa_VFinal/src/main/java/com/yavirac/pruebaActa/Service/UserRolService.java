/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.UserRole;
import com.yavirac.pruebaActa.Repository.UserRolRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 *
 * @author josue
 */
@Service
public class UserRolService {
     @Autowired
    UserRolRepository userrolRepository;
    
    public List<UserRole> findAll(){
        return userrolRepository.findAll();
    }
     /**Read*/
    public UserRole findById(Long id)
    {
        return userrolRepository.findById(id).get();
    }
    
    /**Create, Update */
    public UserRole save(UserRole userrol)
    {
        return userrolRepository.save(userrol);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        userrolRepository.deleteById(id);
    }
}

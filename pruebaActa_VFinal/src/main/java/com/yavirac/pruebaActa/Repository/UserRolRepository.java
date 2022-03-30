/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Repository;


import com.yavirac.pruebaActa.Model.UserRole;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
/**
 *
 * @author josue
 */
public interface UserRolRepository extends CrudRepository<UserRole, Long>{
    List<UserRole> findAll();
}
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Service;

import com.yavirac.pruebaActa.Model.Usuario;
import com.yavirac.pruebaActa.Repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author josue
 */
@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;
    
    public List<Usuario> findAll(){
        return usuarioRepository.findAll();
    }
     /**Read*/
    public Usuario findById(Long id)
    {
        return usuarioRepository.findById(id).get();
    }
    
    /**Create, Update */
    public Usuario save(Usuario usuario)
    {
        return usuarioRepository.save(usuario);
    }
    
    /**Delete */
    public void deleteById(long id)
    {
        usuarioRepository.deleteById(id);
    }
}

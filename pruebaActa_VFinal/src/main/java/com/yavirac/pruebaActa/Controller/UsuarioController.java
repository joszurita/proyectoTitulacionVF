/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.yavirac.pruebaActa.Controller;

import com.yavirac.pruebaActa.Model.Usuario;
import com.yavirac.pruebaActa.Service.UsuarioService;
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
@RequestMapping("/usuario")
public class UsuarioController {
     @Autowired
    UsuarioService usuarioService;
  
    @GetMapping({"/lista","","/"})
    public List<Usuario> findAll()
    {
        return usuarioService.findAll();
    }
    /**Read */
    @GetMapping("/{id}")
    public Usuario findById(@PathVariable long id)
    {
        return usuarioService.findById(id);
    }
    
    @GetMapping("/user/{name}/{pass}")
    public Usuario findByName(@PathVariable String name, @PathVariable String pass)
    {
        Usuario user = new Usuario();
        List<Usuario>usuarios = usuarioService.findAll();
        for(Usuario us: usuarios){
            if(name.equals(us.getUsername())){
                if(pass.equals(us.getPassword())){
                    user = us;
                }
            }
        }
        return user;
    }
    
    /**Create*/ 
    @PostMapping("/save")
    public Usuario save(@RequestBody Usuario usuario)
    {  
        return usuarioService.save(usuario);
    }
    
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id)
    {
        usuarioService.deleteById(id);
    }
    
        @PutMapping("/update/{id}")
    public Usuario update(@PathVariable long id, @RequestBody Usuario usr)
    {
        Usuario usuarioAux = usuarioService.findById(id);
        usuarioAux.setName(usr.getName());
        usuarioAux.setLastname(usr.getLastname());
        usuarioAux.setUsername(usr.getUsername());
        usuarioAux.setPassword(usr.getPassword());
        return usuarioService.save(usuarioAux);
    }
    
    
}

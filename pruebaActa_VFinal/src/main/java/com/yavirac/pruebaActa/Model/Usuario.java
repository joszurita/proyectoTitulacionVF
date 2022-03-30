
package com.yavirac.pruebaActa.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

/**
 *
 * @author josue
 */
@Entity
@Data
public class Usuario {
    @Id
    @Column (name = "id_user")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;
    @Column (name = "name")
    private String name;
    @Column (name = "lastname")
    private String lastname;
    @Column (name = "username")
    private String username;
    @Column (name = "password")
    private String password;
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/constantes/INTERFACES';
import { UserRoleService } from 'src/servicios/rest/UserRoleService';
import { UsuarioService } from 'src/servicios/rest/Usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {
  nombre: string="";
  apellido: string="";
  usuario: string="";
  password: string="";
  password2: string="";
  error:number=0;
  mensaje:string="";
  
  constructor(
    private readonly userServ:UsuarioService,
    private readonly userrolServ: UserRoleService,
    private readonly router: Router
  ) {
   }

  ngOnInit(): void {
  }

  registrarUsuario(){
    if(this.password == this.password2){
      if(this.nombre !== "" && this.apellido !== "" && this.usuario !== "" && this.password !== "" && this.password2 !== "" )
      {
     
        const datosUsuario:Usuario = {
          name:this.nombre,
          lastname:this.apellido,
          username:this.usuario,
          password:this.password
        }

           
        this.userServ.crearUsuario(datosUsuario).subscribe(registrado=>{

          const datosUserRol:any = {
            id_role:"1",
            id_user: JSON.parse(JSON.stringify(registrado)).id_user
          }        
          this.userrolServ.definirUsuario(datosUserRol).subscribe((usuarioDefinido)=>{
              
              this.router.navigate(["login"]);
          });

        });


      }else{
        this.error=1;
        this.mensaje="Todos los campos son obligatorios";
      }
      

    }else{
      this.error=1;
      this.mensaje="Las contraseñas no son iguales";
    }
    
  }

}

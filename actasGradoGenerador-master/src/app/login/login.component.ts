import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from 'src/servicios/rest/UserRoleService';
import { UsuarioService } from 'src/servicios/rest/Usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string="";
  password: string="";
  error:number=0;
  mensaje:string="";
  constructor(
    private readonly userServ:UsuarioService,
    private readonly userRoleServ:UserRoleService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }
  ingresarUsurio(){

    if(this.usuario !== "" && this.password !== ""){
      this.userServ.logeoUsuario(this.usuario,this.password).subscribe((ingreso)=>{
        let datos = JSON.parse(JSON.stringify(ingreso));
        if(datos.id_user === null){
          this.error=1;
          this.mensaje="Usuario o contraseña incorrectos"
        }else{
          this.userRoleServ.consultarRolUsuario(datos.id_user).subscribe((rolUser)=>{
            let datosRol = JSON.parse(JSON.stringify(rolUser));   
            localStorage.setItem('activo',"1");
            this.router.navigate(['usuario',datosRol.id_user,datosRol.id_role]);

          });  
        }
        
      });
    }else{
      this.error=1;
      this.mensaje="Ingrese datos"
    }
  
  }

}

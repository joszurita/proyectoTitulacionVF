import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/servicios/rest/RolesService';
import { UsuarioService } from 'src/servicios/rest/Usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  id_user:any;
  id_role:any;
  datosUsuario:any;
  datosRol:any;

  nombre:string="";
  apellido:string="";
  tipoUsuario:string="";

  constructor(
    private readonly userServ: UsuarioService,
    private readonly rolServ: RolesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    

    if(localStorage.getItem('activo') !== "0"){
      this.id_user  = this.route.snapshot.paramMap.get("id_user");
      this.id_role  = this.route.snapshot.paramMap.get("id_role");
      if(this.id_user !== undefined && this.id_role !== undefined){
          this.userServ.buscarUsuario(this.id_user).subscribe((usuario)=>{  
            this.rolServ.consultarRolUsuario(this.id_role).subscribe((rol)=>{
              this.datosUsuario = usuario;
              this.datosRol = rol;
              this.nombre = this.datosUsuario.name;
              this.apellido = this.datosUsuario.lastname;
              this.tipoUsuario = this.datosRol.name;
            });
          });
          
      }else{
        this.router.navigate(["login"]);
      }
    }else{
      this.router.navigate(["login"]);
    }
    
 
  
  }



  irEstudiantes(){
    this.router.navigate(["usuario-estudiante",this.id_user,this.id_role]);
  }
  irUsuarios(){
    this.router.navigate(["usuario-usuarios",this.id_user,this.id_role]);
  }
  irActas(){
    this.router.navigate(["usuario-actas",this.id_user,this.id_role]);
  }

  cerrarSesion(){
    this.id_role=undefined;
    this.id_user=undefined;
    localStorage.setItem('activo',"0");
    this.router.navigate(["home"]);
  }

}

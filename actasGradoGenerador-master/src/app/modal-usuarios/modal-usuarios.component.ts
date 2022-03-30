import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/constantes/INTERFACES';
import { CarreraService } from 'src/servicios/rest/CarreraService';
import { RolesService } from 'src/servicios/rest/RolesService';
import { UserRoleService } from 'src/servicios/rest/UserRoleService';
import { UsuarioService } from 'src/servicios/rest/Usuario.service';

@Component({
  selector: 'app-modal-usuarios',
  templateUrl: './modal-usuarios.component.html',
  styleUrls: ['./modal-usuarios.component.scss']
})
export class ModalUsuariosComponent implements OnInit {
  tipoModal:string="0";

  name:string="";
  lastname:string="";
  username:string="";
  password:string="";

  id_user:string="";
  rolseleccionado:any;
  roles:Usuario[]=[];
  id_role:string="";
  role_user:string="";
  error:number=0;
  mensaje:string="";


  constructor(
    private readonly rolServ:RolesService,
    private readonly userServ: UsuarioService,
    private readonly userrolServ:UserRoleService,
    private readonly router: Router,
    public dialogService: DialogService, 
    public messageService: MessageService,
    private readonly ref: DynamicDialogRef ,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {

    this.rolServ.consultarRoles().subscribe((rolUser)=>{
      this.roles = JSON.parse(JSON.stringify(rolUser));

      if(this.config.data!== undefined){
        this.tipoModal = this.config.data.tipoModal;
        this.name = this.config.data.name;
        this.lastname = this.config.data.lastname;
        this.username = this.config.data.username;
        this.password = this.config.data.password;
        this.id_role = this.config.data.id_role;
        this.id_user = this.config.data.id_user;
        this.role_user = this.config.data.role_user;
        for(let r of this.roles){
          if(r.id_role == this.id_role){
            this.rolseleccionado = r;
          }
        }


      }

    });

   
  }

  actualizar(){

    const datoUsuario:any = {
        name:this.name,
        lastname:this.lastname,
        username:this.username,
        password:this.password
    }
    this.userServ.actualizarUsuario(this.id_user,datoUsuario).subscribe((usuarioActualizado)=>{

       
        if(this.id_role !== "0"){

          const datosUserRol:any = {
            id_role:this.rolseleccionado.id_role,
            id_user:this.id_user
          }
          console.log(this.role_user);
          console.log(datosUserRol);

          this.userrolServ.actualizarUserRole(this.role_user,datosUserRol).subscribe(((userrolActualizado)=>{
            
            
            window.location.reload();
            this.ref.close();
          }));
          
        }else{
           window.location.reload();
           this.ref.close();
        }
         

      
    })

  }

   
  
    registrar(){
      
      const datoUsuario:any = {
        name:this.name,
        lastname:this.lastname,
        username:this.username,
        password:this.password
      }
      
      console.log(datoUsuario);
      this.userServ.crearUsuario(datoUsuario).subscribe((usuarioCreado)=>{
        const datosUserRol:any = {
          id_role:this.rolseleccionado.id_role,
          id_user: JSON.parse(JSON.stringify(usuarioCreado)).id_user
        }        
        this.userrolServ.definirUsuario(datosUserRol).subscribe((usuarioDefinido)=>{
            window.location.reload();
            this.ref.close();
        });
      });
  
      
    }

}

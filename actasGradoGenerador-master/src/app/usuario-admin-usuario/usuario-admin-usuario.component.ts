import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Usuario } from 'src/constantes/INTERFACES';
import { RolesService } from 'src/servicios/rest/RolesService';
import { UserRoleService } from 'src/servicios/rest/UserRoleService';
import { UsuarioService } from 'src/servicios/rest/Usuario.service';
import Swal from 'sweetalert2';
import { ModalUsuariosComponent } from '../modal-usuarios/modal-usuarios.component';

@Component({
  selector: 'app-usuario-admin-usuario',
  templateUrl: './usuario-admin-usuario.component.html',
  styleUrls: ['./usuario-admin-usuario.component.scss']
})
export class UsuarioAdminUsuarioComponent implements OnInit {
  id_user:any;
  id_role:any;
  datosUsuario:any;
  datosRol:any;
  USUARIOS:Usuario[]=[];


  nombre:string="";
  apellido:string="";
  tipoUsuario:string="";
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService, 
    private readonly userServ: UsuarioService,
    private readonly rolServ: RolesService,
    private readonly userrolServ: UserRoleService,
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
              this.userServ.consultarUsuario().subscribe((usuariosAll)=>{
                let userAll = JSON.parse(JSON.stringify(usuariosAll));

                let datosUsuarioFiltrados=[];
                for(let use of userAll){                  
                  let a =this.consultarUserRol(use.id_user);
                  a.then(a=>{
                    use.id_role= JSON.parse(JSON.stringify(a)).id_role; 
                    use.role_user =  JSON.parse(JSON.stringify(a)).role_user;
                    if(use.id_role !== 0){
                      let b =this.consultarRol(use.id_role);
                      b.then(b=>{
                        use.nameRol= JSON.parse(JSON.stringify(b)).name; 
                      }); 
                    }else{
                        use.nameRol = "Sin definir";
                    }
                  });    
 
                  datosUsuarioFiltrados.push(use);
                }

              


                this.USUARIOS = datosUsuarioFiltrados;

                this.datosUsuario = usuario;
                this.datosRol = rol;
                this.nombre = this.datosUsuario.name;
                this.apellido = this.datosUsuario.lastname;
                this.tipoUsuario = this.datosRol.name;
              });
              
            });
          });
          
      }else{
        this.router.navigate(["login"]);
      }
    }else{
      this.router.navigate(["login"]);
    }

  }

  regresar(){
    this.router.navigate(["usuario",this.id_user,this.id_role]);
  }

  async consultarRol(id_rol:number){
    return await this.rolServ.consultarRolUsuario(id_rol).toPromise();
  }
  async consultarUserRol(id_user:number){
    return await this.userrolServ.consultarRolUsuario(id_user).toPromise();
  } 


  nuevoUsuario(){
    this.ref = this.dialogService.open(ModalUsuariosComponent, {
      header: "REGISTRO USUARIO",
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  this.ref.onClose.subscribe((product: ModalUsuariosComponent) =>{
      
  });
  }

  eliminarUsuario(id_usuario:string, id_role:string){
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas Seguro?',
      text: "Se perderán los datos del estudiante",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

      this.userServ.eliminarUsuario(id_usuario).subscribe((usuarioEliminado)=>{
        console.log(id_role);
        
        if(id_role !== "0" && id_role !== null){
          this.userrolServ.eliminarUserRole(id_role).subscribe((userrolEliminado)=>{
            swalWithBootstrapButtons.fire(
              'Eliminado!'+id_usuario,
              'Los datos se borraron de su registro.',
              'success'
            )
            
             window.location.reload();
          })
        }else{
          swalWithBootstrapButtons.fire(
            'Eliminado!'+id_usuario,
            'Los datos se borraron de su registro.',
            'success'
          )
          
           window.location.reload();
        }
      });

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado!',
          'Los datos no fueron eliminados',
          'error'
        )
      }
    })

    }
  actualizarUsuario(id_user:string,role_user:string ,name:string,lastname:string,username:string,password:string,id_role:string){
    this.ref = this.dialogService.open(ModalUsuariosComponent, {
      data:{
        tipoModal:1,
        role_user:role_user,
        id_user:id_user,
        name:name,
        lastname:lastname,
        username:username,
        password:password,
        id_role:id_role,
      },
      header: "Actualizar Usuario",
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  this.ref.onClose.subscribe((product: ModalUsuariosComponent) =>{
  });
  }


  
  cerrarSesion(){
    this.id_role=undefined;
    this.id_user=undefined;
    localStorage.setItem('activo',"0");
    this.router.navigate(["home"]);
  }
}
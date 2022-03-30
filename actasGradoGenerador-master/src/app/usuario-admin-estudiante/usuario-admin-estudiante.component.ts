import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EstudianteInterface } from 'src/constantes/INTERFACES';
import { CarreraService } from 'src/servicios/rest/CarreraService';
import { EstudianteService } from 'src/servicios/rest/EstudianteService';
import { RolesService } from 'src/servicios/rest/RolesService';
import { UsuarioService } from 'src/servicios/rest/Usuario.service';
import Swal from 'sweetalert2';
import { ModalEstudianteComponent } from '../modal-estudiante/modal-estudiante.component';


@Component({
  selector: 'app-usuario-admin-estudiante',
  templateUrl: './usuario-admin-estudiante.component.html',
  styleUrls: ['./usuario-admin-estudiante.component.scss']
})
export class UsuarioAdminEstudianteComponent implements OnInit {
  id_user:any;
  id_role:any;
  datosUsuario:any;
  datosRol:any;
  ESTUDIANTES:EstudianteInterface[]=[];

  nombre:string="";
  apellido:string="";
  tipoUsuario:string="";
  nombreCarrera:string="";
  
 

  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService, 
    public messageService: MessageService,
    private readonly carreraServ: CarreraService,
    private readonly userServ: UsuarioService,
    private readonly rolServ: RolesService,
    private readonly route: ActivatedRoute,
    private readonly estudianteService: EstudianteService,
    private readonly router: Router,
    private readonly modalEstudiante: ModalEstudianteComponent
  ) { }

  ngOnInit(): void {

    if(localStorage.getItem('activo') !== "0"){
      this.id_user  = this.route.snapshot.paramMap.get("id_user");
      this.id_role  = this.route.snapshot.paramMap.get("id_role");
      if(this.id_user !== undefined && this.id_role !== undefined){
          this.userServ.buscarUsuario(this.id_user).subscribe((usuario)=>{  
            this.rolServ.consultarRolUsuario(this.id_role).subscribe((rol)=>{
              this.estudianteService.consultarEstudiantes().subscribe((estudiantes)=>{

                let datosEstudiante = JSON.parse(JSON.stringify(estudiantes));

                let datosEstudainteFiltrados=[];
                for(let est of datosEstudiante){
                  let a =this.consultarCarrera(est.id_carrera);
                  a.then(a=>{
                    est.nombre_carrera= JSON.parse(JSON.stringify(a)).nombre_carrera;  
                  });
                  datosEstudainteFiltrados.push(est);
                }

                this.ESTUDIANTES = datosEstudainteFiltrados;                                
                this.datosUsuario = usuario;
                this.datosRol = rol;
                this.nombre = this.datosUsuario.name;
                this.apellido = this.datosUsuario.lastname;
                this.tipoUsuario = this.datosRol.name;

              })
            });
          });
          
      }else{
        this.router.navigate(["login"]);
      }
    }else{
      this.router.navigate(["login"]);
    }

  }


  async consultarCarrera(id_carrera:string){
      return await this.carreraServ.consultarCarrerasbyId(id_carrera).toPromise();
  }

  actualizarEstudiante(id_estudiante:string,cedula:string,apellidos:string,nombres:string,id_carrera:string){
    this.ref = this.dialogService.open(ModalEstudianteComponent, {
      data:{
        tipoModal:1,
        id_estudiante:id_estudiante,
        cedula:cedula,
        apellidos:apellidos,
        nombres:nombres,
        id_carrera:id_carrera,
      },
      header: "Actualizar Estudiante #"+id_estudiante,
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  this.ref.onClose.subscribe((product: ModalEstudianteComponent) =>{
      if (product) {
          this.messageService.add({severity:'info', summary: 'Product Selected', detail: "null"});
          
      }
  });
  }


  regresar(){
    this.router.navigate(["usuario",this.id_user,this.id_role]);
  }

 

  eliminarEstudiante(id_estudiante:string){
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

       this.estudianteService.eliminarEstudiante(id_estudiante).subscribe((eliminado)=>{
         window.location.reload();
        swalWithBootstrapButtons.fire(
          'Eliminado!'+id_estudiante,
          'Los datos se borraron de su registro.',
          'success'
        )

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

  nuevoEstudiante(){
  
      this.ref = this.dialogService.open(ModalEstudianteComponent, {
          header: "REGISTRO ESTUDIANTE",
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          baseZIndex: 10000
      });

      this.ref.onClose.subscribe((product: ModalEstudianteComponent) =>{
          if (product) {
              this.messageService.add({severity:'info', summary: 'Product Selected', detail: "null"});
              
          }
      });
  }

  
  cerrarSesion(){
    this.id_role=undefined;
    this.id_user=undefined;
    localStorage.setItem('activo',"0");
    this.router.navigate(["home"]);
  }

}




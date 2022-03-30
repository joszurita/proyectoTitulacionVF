import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CarreraInterface } from 'src/constantes/INTERFACES';
import { CarreraService } from 'src/servicios/rest/CarreraService';
import { EstudianteService } from 'src/servicios/rest/EstudianteService';

@Component({
  selector: 'app-modal-estudiante',
  templateUrl: './modal-estudiante.component.html',
  styleUrls: ['./modal-estudiante.component.scss'],
  providers: [DialogService, MessageService]
})
export class ModalEstudianteComponent {
  tipoModal:string="0";

  cedula:string="";
  apellidos:string="";
  nombres:string="";
  carreraSeleccionada:CarreraInterface | undefined;
  carreras:CarreraInterface[]=[];
  id_carrera:string="";

  error:number=0;
  mensaje:string="";


  constructor(
    private readonly carreraServ:CarreraService,
    private readonly studentServ:EstudianteService,
    private readonly router: Router,
    public dialogService: DialogService, 
    public messageService: MessageService,
    private readonly ref: DynamicDialogRef ,
    public config: DynamicDialogConfig
  ) { 

    this.carreraServ.consultarCarreras().subscribe((carrera)=>{
      this.carreras = JSON.parse(JSON.stringify(carrera));  
      
     
      if(this.config.data!== undefined){
          this.tipoModal = this.config.data.tipoModal;
          this.cedula = this.config.data.cedula;
          this.apellidos = this.config.data.apellidos;
          this.nombres = this.config.data.nombres;
          this.id_carrera = this.config.data.id_carrera;
      }
      
    });
  }




  actualizar(){

    const datosEstudiante:any = {
      cedula:this.cedula,
      apellidos:this.apellidos,
      nombres:this.nombres,
      id_carrera:this.carreraSeleccionada?.id_carrera
    }
    
    this.studentServ.actualizarEstudiante(this.config.data.id_estudiante,datosEstudiante).subscribe((actualizado)=>{
      window.location.reload();
        this.ref.close();
    });
  }

   
  
    registrar(){
      
      const datosEstudiante:any = {
        cedula:this.cedula,
        apellidos:this.apellidos,
        nombres:this.nombres,
        id_carrera:this.carreraSeleccionada?.id_carrera
      }     
      this.studentServ.registrarEstudiante(datosEstudiante).subscribe((registrado)=>{
        window.location.reload();
        this.ref.close();
      });
      
    }

}

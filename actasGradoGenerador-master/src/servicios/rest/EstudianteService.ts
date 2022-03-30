import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EstudianteInterface } from 'src/constantes/INTERFACES';

@Injectable()
export class EstudianteService {
  private segmento = 'estudiante';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }


  consultarEstudiantes(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

  registrarEstudiante(datosEstudiante:EstudianteInterface){
    const path = 'save';
    const uri = `${this.url}/${this.segmento}/${path}`;
     return this._httpClient.post(uri,{
      cedula:datosEstudiante.cedula,
      apellidos:datosEstudiante.apellidos,
      nombres:datosEstudiante.nombres,
      id_carrera:datosEstudiante.id_carrera
     });
  }

  eliminarEstudiante(id_estudiante:string){
    const path = 'delete';
    const uri = `${this.url}/${this.segmento}/${path}/${id_estudiante}`;
     return this._httpClient.delete(uri);
  }

  actualizarEstudiante(id_estudiante:string,estudiante:any){
    const path = 'update';
    const uri = `${this.url}/${this.segmento}/${path}/${id_estudiante}`;
     return this._httpClient.put(uri,{
      cedula:estudiante.cedula,
      apellidos:estudiante.apellidos,
      nombres:estudiante.nombres,
      id_carrera:estudiante.id_carrera
     });
  }

}
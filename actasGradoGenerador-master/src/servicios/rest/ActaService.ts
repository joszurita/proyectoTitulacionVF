import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ActaService {
  private segmento = 'acta';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }

  guardarActa(datosActa){
    const path = 'save';
    const uri = `${this.url}/${this.segmento}/${path}`;
     return this._httpClient.post(uri,{
        id_anio:datosActa.id_anio,
        id_mes:datosActa.id_mes,
        id_dia:datosActa.id_dia,
        id_estudiante:datosActa.id_estudiante,
        presidente:datosActa.presidente,
        vocal1:datosActa.vocal1,
        vocal2:datosActa.vocal2
     });
  }

}
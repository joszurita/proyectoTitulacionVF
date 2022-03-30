import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarreraService {
  private segmento = 'carrera';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }


  consultarCarreras(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

  consultarCarrerasbyId(id_carrera:string){
    const uri = `${this.url}/${this.segmento}/${id_carrera}`;
     return this._httpClient.get(uri);
  }




}
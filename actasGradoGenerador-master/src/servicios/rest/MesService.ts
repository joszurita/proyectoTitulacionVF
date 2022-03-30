import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MesService {
  private segmento = 'mes';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }

  consultarMeses(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

}
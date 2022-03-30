import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DiaService {
  private segmento = 'dia';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }

  consultarDias(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

}
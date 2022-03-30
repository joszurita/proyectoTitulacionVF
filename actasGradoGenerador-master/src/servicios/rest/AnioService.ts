import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AnioService {
  private segmento = 'anio';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }

  consultarAnios(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

}
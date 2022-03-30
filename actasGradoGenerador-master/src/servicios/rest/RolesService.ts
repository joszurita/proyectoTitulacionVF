import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RolesService {
  private segmento = 'roles';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }


  consultarRolUsuario(id_role:number){
    const uri = `${this.url}/${this.segmento}/${id_role}`;
     return this._httpClient.get(uri);
  }

  consultarRoles(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

}
import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserRoleService {
  private segmento = 'userrol';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }


  consultarRolUsuario(id_user:number){
    const path = 'user';
    const uri = `${this.url}/${this.segmento}/${path}/${id_user}`;
     return this._httpClient.get(uri);
  }


  definirUsuario(datosUserrol:any){
    const path = 'save';
    const uri = `${this.url}/${this.segmento}/${path}`;
     return this._httpClient.post(uri,{
      id_role:datosUserrol.id_role,
      id_user:datosUserrol.id_user
     });
  }


  eliminarUserRole(role_user:string){
    const path = 'delete';
    const uri = `${this.url}/${this.segmento}/${path}/${role_user}`;
     return this._httpClient.delete(uri);
  }


  actualizarUserRole(role_user:string,userrol:any){
    const path = 'update';
    const uri = `${this.url}/${this.segmento}/${path}/${role_user}`;
     return this._httpClient.put(uri,{
      id_role:userrol.id_role,
      id_user:userrol.id_user
     });
  }
 
}
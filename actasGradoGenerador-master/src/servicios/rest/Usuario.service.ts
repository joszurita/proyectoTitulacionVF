import {environment} from './../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {
  private segmento = 'usuario';
  private url = `${environment.host}:${environment.port}`;

  constructor(private readonly _httpClient: HttpClient) {
  }

  crearUsuario(datosUsuario:any) {
    const path = 'save';
    const uri = `${this.url}/${this.segmento}/${path}`;
    console.log(datosUsuario);
    
    return this._httpClient.post(uri, 
      {
        name:datosUsuario.name,
        lastname: datosUsuario.lastname,
        username: datosUsuario.username,
        password: datosUsuario.password
      });
  }


  consultarUsuario(){
    const uri = `${this.url}/${this.segmento}`;
     return this._httpClient.get(uri);
  }

  logeoUsuario(user:string, pass:string){
    const path = 'user';
    const uri = `${this.url}/${this.segmento}/${path}/${user}/${pass}`;
    return this._httpClient.get(uri);
  }

  buscarUsuario(iduser:number){
    const uri = `${this.url}/${this.segmento}/${iduser}`;
    return this._httpClient.get(uri);
  }

  eliminarUsuario(id_user:string){
    const path = 'delete';
    const uri = `${this.url}/${this.segmento}/${path}/${id_user}`;
     return this._httpClient.delete(uri);
  }

  actualizarUsuario(id_user:string,usuario:any){
    const path = 'update';
    const uri = `${this.url}/${this.segmento}/${path}/${id_user}`;
     return this._httpClient.put(uri,{
      name:usuario.name,
      lastname:usuario.lastname,
      username:usuario.username,
      password:usuario.password
     });
  }
 
}
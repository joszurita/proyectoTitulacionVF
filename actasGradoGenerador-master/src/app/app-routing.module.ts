import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuarioAdminEstudianteComponent } from './usuario-admin-estudiante/usuario-admin-estudiante.component';
import { UsuarioAdminUsuarioComponent } from './usuario-admin-usuario/usuario-admin-usuario.component';
import { UsuarioNormalActasComponent } from './usuario-normal-actas/usuario-normal-actas.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'nuevo',
    component:NuevoUsuarioComponent
  },
  {
    path:'usuario/:id_user/:id_role',
    component:UsuarioComponent
  },
  {
    path:'usuario-estudiante/:id_user/:id_role',
    component:UsuarioAdminEstudianteComponent
  },
  {
    path:'usuario-usuarios/:id_user/:id_role',
    component:UsuarioAdminUsuarioComponent
  },
  {
    path:'usuario-actas/:id_user/:id_role',
    component:UsuarioNormalActasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

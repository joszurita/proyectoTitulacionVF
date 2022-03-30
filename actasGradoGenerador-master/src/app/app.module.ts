import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

import { SERVICIOS } from './../constantes/SERVICIOS';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioAdminEstudianteComponent } from './usuario-admin-estudiante/usuario-admin-estudiante.component';
import { UsuarioAdminUsuarioComponent } from './usuario-admin-usuario/usuario-admin-usuario.component';
import { ModalEstudianteComponent } from './modal-estudiante/modal-estudiante.component';

import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ModalUsuariosComponent } from './modal-usuarios/modal-usuarios.component';
import { UsuarioNormalActasComponent } from './usuario-normal-actas/usuario-normal-actas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NuevoUsuarioComponent,
    UsuarioComponent,
    UsuarioAdminEstudianteComponent,
    UsuarioAdminUsuarioComponent,
    ModalEstudianteComponent,
    ModalUsuariosComponent,
    UsuarioNormalActasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    
    
  ],
  providers: [
    ModalEstudianteComponent,
    ModalUsuariosComponent,
    DialogService,
    MessageService,
    DynamicDialogRef,
    DynamicDialogConfig,
    ...SERVICIOS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

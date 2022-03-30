import { ActaService } from "src/servicios/rest/ActaService";
import { AnioService } from "src/servicios/rest/AnioService";
import { CarreraService } from "src/servicios/rest/CarreraService";
import { DiaService } from "src/servicios/rest/DiaService";
import { EstudianteService } from "src/servicios/rest/EstudianteService";
import { MesService } from "src/servicios/rest/MesService";
import { RolesService } from "src/servicios/rest/RolesService";
import { UserRoleService } from "../servicios/rest/UserRoleService";
import {UsuarioService } from "../servicios/rest/Usuario.service";
export const SERVICIOS = [
    UsuarioService,
    UserRoleService,
    RolesService,
    EstudianteService,
    CarreraService,
    DiaService,
    MesService,
    AnioService,
    ActaService
];

export interface Usuario{
    id_user?:string,
    name:string;
    lastname:string;
    username:string;
    password:string;
    id_role?:string;
    nameRol?:string;
    role_user?:string;
};

export interface EstudianteInterface{
    id_estudiante:string,
    cedula:string,
    apellidos:string,
    nombres:string,
    nombre_carrera?:string,
    id_carrera:string,
    nombre_completo?:string
}

export interface CarreraInterface{
    id_carrera:string,
    cod_carrera:string,
    nombre_carrera:string,
    titulo_obtenido:string
}

export interface DiaInterface{
    id_dia:string,
    cod_dia:string,
    dia_letras:string,
}

export interface AnioInterface{
    id_anio:string,
    cod_anio:string,
    anio_letras:string,
}

export interface MesInterface{
    id_mes:string,
    cod_mes:string,
    mes_letras:string,
}


export interface ActaInterface{
    numero_acta?:string,
    id_anio:string,
    id_mes:string,
    id_dia:string,
    id_estudiante:string,
    presidente:string,
    vocal1:string,
    vocal2:string
}
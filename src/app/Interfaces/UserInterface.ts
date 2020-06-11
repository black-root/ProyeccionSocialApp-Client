export interface User{
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  clave: string;
  rol: Rol;
}

export interface Rol {
  id: number;
  descripcion: string;
}

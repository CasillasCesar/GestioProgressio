import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000'; // Si se desea volver a usar solo tengo que cambiar la URL
  private proyectSelected : Proyecto = {} as Proyecto;
  proyectos: any;
  constructor(private http: HttpClient) { }

  // Obtener todos los empleados
  getEmployees(): Observable<any> {
    const url = `${this.apiUrl}/staff`;
    return this.http.get(url);
  }

  // Obtener todos los empleados
  getEmployeesWID(id:number): Observable<any> {
    const url = `${this.apiUrl}/personas/${id}`;
    return this.http.get(url);
  }

  // Obtener roles de un empleado por su ID
  getRolesByEmployeeId(employeeId: number): Observable<any> {
    const url = `${this.apiUrl}/roles/${employeeId}`;
    return this.http.get(url);
  }

  // Obtener todos los proyectos
  getProjects(): Observable<any> {
    const url = `${this.apiUrl}/proyectos`;
    return this.http.get(url);
  }

  // Obtener todos los recursos
  getResources(): Observable<any> {
    const url = `${this.apiUrl}/recursos`;
    return this.http.get(url);
  }

  // Agregar un nuevo usuario
  addUser(user: any): Observable<any>{
    const url = `${this.apiUrl}/register`;
    const body = {
      nombre_usuario: user.nombreUsuario,
      correo_usuario: user.correo,
      contrasena_usuario: user.contrasena
    };
    return this.http.post(url, body);
  }

  // Agregar un nuevo rol
  addRole(roleData: any): Observable<any> {
    const url = `${this.apiUrl}/roles`;
    return this.http.post(url, roleData);
  }

  // Agregar una nueva persona
  addPerson(personData: any): Observable<any> {
    const url = `${this.apiUrl}/personas`;
    return this.http.post(url, personData);
  }

  // Agregar un nuevo proyecto
  addProject(project: any): Observable<any> {
    const url = `${this.apiUrl}/proyectos`;
    const body = {
      nombre: project.nombre,
      responsable: project.responsable,
      fechaInicio: project.fechainicio,
      fechaFin: project.fechafin,
      descripcion: project.descripcion
    }
    return this.http.post(url, body);
  }

  // Agregar una nueva actividad
  addActivity(activityData: any): Observable<any> {
    const url = `${this.apiUrl}/actividades`;
    return this.http.post(url, activityData);
  }

  addFullActivity(data:any):Observable<any>{
    const url = `${this.apiUrl}/agregarActividad`;
    return this.http.post(url,data)
  }

  sendMails(data:any){
    const url = `${this.apiUrl}/sendMsj`;
    return this.http.post(url,data)
  }

  getSelectedProject() : Proyecto{
    return this.proyectSelected;
  }

  setProyecto(project : Proyecto):void{
    this.proyectSelected = project;
  }

    // Iniciar sesion
    loginUser(loginData: any): Observable<any> {
      const url = `${this.apiUrl}/login`;
      const body = {
        nombre_usuario: loginData.nombre_usuario,
        contrasena_usuario: loginData.contrasena_usuario
      }
      return this.http.post(url, body);
    }

  // Puedes agregar más funciones según las necesidades de tu aplicación
}

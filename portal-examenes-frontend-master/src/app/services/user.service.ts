import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


    constructor(private httpClient: HttpClient) { }

    public añadirUsuario(user: any) {
      console.log('baseUrl:', baserUrl); // Imprime el valor de baseUrl
    
      return this.httpClient.post(`${baserUrl}/usuarios/`, user).pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
    
          // Puedes realizar acciones adicionales aquí si es necesario
    
          return throwError(error); // Propaga el error para que el componente también pueda manejarlo
        })
      );

}}

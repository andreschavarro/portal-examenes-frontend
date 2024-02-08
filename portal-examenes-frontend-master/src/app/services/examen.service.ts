import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { 

  }

  agregarExamen(examen:any){
    return this.http.post(`${baserUrl}/examen/`, examen);
  }

  listarCuestionarios(){
    return this.http.get(`${baserUrl}/examen/`);
  }

  eliminarExamen(examenId:any){
    return this.http.delete(`${baserUrl}/examen/${examenId}`);
  }

  obtenerExamen(examenId:any){
    return this.http.get(`${baserUrl}/examen/${examenId}`)
  }

  actualizarExamen(examen:any){
    return this.http.put(`${baserUrl}/examen/`, examen);
  }


}

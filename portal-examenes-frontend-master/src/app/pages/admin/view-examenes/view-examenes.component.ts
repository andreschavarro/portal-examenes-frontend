import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css'],
})
export class ViewExamenesComponent implements OnInit {
  examenes: any = [];

  constructor(private examenService: ExamenService) {}

  ngOnInit(): void {
    this.examenService.listarCuestionarios().subscribe(
      (dato: any) => {
        this.examenes = dato;
        console.log(this.examenes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al cargar los exámenes', 'error');
      }
    );
  }

  eliminarExamen(examenId:any){
    Swal.fire({
      title: 'Eliminar Examen',
      text: '¿Estas seguro de eliminar el examen?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.examenService.eliminarExamen(examenId).subscribe(
          (dato: any) => {
            this.examenes = this.examenes.filter((examenId:any) => examenId.examenId != examenId);
            Swal.fire('Examen eliminado', 'El examen se eliminó correctamente','success');
            this.ngOnInit();
          },
          (error) => {
            console.log(error);
            Swal.fire('Error', 'Error al eliminar el examen', 'error');
          }
        );
      }
    })
  }
}

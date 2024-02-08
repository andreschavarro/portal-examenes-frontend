import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examenes',
  templateUrl: './actualizar-examenes.component.html',
  styleUrls: ['./actualizar-examenes.component.css'],
})
export class ActualizarExamenesComponent implements OnInit {
  examenId = 0;
  examen: any = null;
  categorias: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private examenservice: ExamenService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.examenservice.obtenerExamen(this.examenId).subscribe(
      (data) => {
        this.examen = data;
        console.log(this.examen);
      },
      (error) => {
        console.log(error);
      }
    );

    this.categoriaService.listarCategorias().subscribe(
      (data) => {
        this.categorias = data;
        console.log(this.categorias);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  actualizarExamen() {
    this.examenservice.actualizarExamen(this.examen).subscribe((data) => {
      Swal.fire(
        'Examen Actualizado',
        'El examen ha sido actualizado con exito',
        'success'
      ).then( 
      (e: any) => {
        this.router.navigate(['/admin/examenes']);
      });
    },(error) => {
      Swal.fire(
        'Error en el sistema',
        'No se ha podido actualizar el examen',
        'error')
        console.log(error);
    });
  }
}

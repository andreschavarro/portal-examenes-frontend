import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-examen',
  templateUrl: './load-examen.component.html',
  styleUrls: ['./load-examen.component.css'],
})
export class LoadExamenComponent implements OnInit {
  categoriaId: any;
  examenes: any;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private examenService: ExamenService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoriaId = params['categoriaId'];
      console.log(this.categoriaId);

      if (this.categoriaId == 0) {
        console.log('cargando los examenes');
        this.examenService.obtenerExamenesActivos().subscribe((data) => {
          this.examenes = data;
          console.log(this.examenes);
        });
      } else {
        console.log('Cargando un examen en específico');
        this.examenService
          .obtenerExamenesInactivosPorCategoria(this.categoriaId)
          .subscribe(
            (data: any) => {
              this.examenes = data;
              console.log(this.examenes);
            },
            (error) => {
              console.log(error);
            }
          );
      }
    });
  }
}

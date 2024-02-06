import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css'],
})
export class ViewCategoriasComponent implements OnInit {
  categorias: any = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService
      .listarCategorias()
      .subscribe((categoria:any) => {
        this.categorias = categoria;
        console.log("this.categorias");
      },
      (error) => {
        console.log(error);
        Swal.fire('error !!',"Error al cargar las categorias");
      }
      );
  }
}
     
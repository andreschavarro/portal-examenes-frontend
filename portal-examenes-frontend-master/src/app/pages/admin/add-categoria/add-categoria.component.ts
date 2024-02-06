import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  categoria = {
    titulo : '',
    descripcion : ''
  }

  constructor(private categoriaService:CategoriaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
   if(this.categoria.titulo.trim() == ''  || this.categoria.titulo.trim() == null){
    this.snack.open("El título es requerido !!",'',{
      duration:3000
    })
    return ;
   }

   this.categoriaService.guardarCategoria(this.categoria).subscribe((dato:any) => {
    this.categoria.titulo = '';
    this.categoria.descripcion = '';
    Swal.fire('Categoría agregada','La categoría ha sido agregada con éxito','success');
    this.router.navigate(['/admin/categorias']);
  },
  (error) => {
    console.log(error);
    Swal.fire('Error !!','Error al guardar la categoría','error')
  }
)
}
}
   


/// Generada por la IA Tabnine

//   if(this.categoria.titulo.trim() == '' || this.categoria.titulo.trim() == null){
//     this.snack.open('El titulo de la categoria es requerido!!','Aceptar',{
//       duration:3000
//     })
//     return;
//   }
//   if(this.categoria.descripcion.trim() == '' || this.categoria.descripcion.trim() == null){
//     this.snack.open('La descripcion de la categoria es requerida!!','Aceptar',{
//       duration:3000
//     })
//     return;
//   }
//   this.categoriaService
//  .guardarCategoria(this.categoria)
// }


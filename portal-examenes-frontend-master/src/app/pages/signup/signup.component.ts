import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
  };

  constructor(private userService: UserService, private snack: MatSnackBar) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this.snack.open('El nombre del usuario es requerido !!', 'aceptar', {});
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire(
          'Usuario guardado',
          'Usuario registrado con éxito en el sistema',
          'success'
        );
      },
      (error) => {
        console.log(error);
        if (
          error.status === 500 &&
          error.error.message === 'El usuario ya esta presente'
        ) {
          this.snack.open('El usuario ya existe en el sistema', 'Aceptar', {
            duration: 3000,
          });
        } else {
          Swal.fire(
            'Usuario guardado',
            'Usuario registrado con éxito en el sistema',
            'success'
          );
        }
      }
    );
  }
}

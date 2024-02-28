import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  examenId: any;
  preguntas: any;
  puntosConseguidos = 0;
  respuestasCorrectas = 0;
  intentos = 0;

  esEnviado = false;

  constructor(
    private route: ActivatedRoute,
    private locationSt: LocationStrategy,
    private preguntaService: PreguntaService
  ) {}

  ngOnInit(): void {
    this.prevenirElBotonDeRetroceso();
    this.examenId = this.route.snapshot.params['examenId'];
    console.log(this.examenId);
    this.cargarPreguntas();
    console.log(this.preguntas);
  }

  cargarPreguntas() {
    this.preguntaService.listarPreguntasDelExamenParaLaPrueba(this.examenId).subscribe(
      (data: any) => {
        console.log(data);
        this.preguntas = data;
        this.preguntas.forEach((p:any) => {
          p['respuestaDada'] = '';
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('error', 'error al cargar preguntas', 'error');
      }
    );
  }

  prevenirElBotonDeRetroceso() {
    history.pushState(null, null!, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, null!, location.href);
    });
  }

  enviarCuestionario(){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar!'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.esEnviado = true;
        this.preguntas.forEach((p:any) => {
          if(p.respuestaDada == p.respuesta){
            this.respuestasCorrectas ++;
            let puntos = this.preguntas[0].examen.puntosMaximos/this.preguntas.length;
            this.puntosConseguidos += puntos;
          }
          if(p.respuestaDada.trim() != ''){
            this.intentos++;
          }
        })
        console.log('respuestas',this.respuestasCorrectas);
        console.log('puntos conseguidos',this.puntosConseguidos);
        console.log('intentos' + this.intentos);
        console.log(this.preguntas);
      }
    })
  }
}

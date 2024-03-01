import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
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
  timer: any;

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
        this.timer = this.preguntas.length *2 *60;
        this.preguntas.forEach((p:any) => {
          p['respuestaDada'] = '';
        });
        this.iniciarTemporizador();
      },
      (error) => {
        console.log(error);
        Swal.fire('error', 'error al cargar preguntas', 'error');
      }
    );
  }


  iniciarTemporizador(){
    let t = window.setInterval(() => {
      if(this.timer <= 0) {
        this.evaluarExamen();
        clearInterval(t)
      }else{
        this.timer--;
      }
    },1000)
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
    }).then((e:any) => {
      if(e.isConfirmed){
        this.evaluarExamen()
      }
    })
  }

   evaluarExamen(){
    this.preguntaService.evaluarExamen(this.preguntas).subscribe((data:any) => {
      this.puntosConseguidos = data.puntosMaximos;
      this.respuestasCorrectas = data.respuestasCorrectas;
      this.intentos = data.intentos;
      this.esEnviado = true;
    },(error) => {
      console.log(error);
      Swal.fire('error', 'error al evaluar examen', 'error');
    })
  //   this.esEnviado = true;
  //   this.preguntas.forEach((p:any) => {
  //     if(p.respuestaDada == p.respuesta){
  //       this.respuestasCorrectas ++;
  //       let puntos = this.preguntas[0].examen.puntosMaximos/this.preguntas.length;
  //       this.puntosConseguidos += puntos;
  //     }
  //     if(p.respuestaDada.trim() != ''){
  //       this.intentos++;
  //     }
  //   })
  //   console.log('respuestas',this.respuestasCorrectas);
  //   console.log('puntos conseguidos',this.puntosConseguidos);
  //   console.log('intentos' + this.intentos);
  //   console.log(this.preguntas);
   }

  obtenerHoraFormateada(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;
    return `${mm} : min : ${ss} seg`
  }

  imprimirPagina(){
    window.print();
  }
}




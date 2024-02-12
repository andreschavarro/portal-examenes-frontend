import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenesComponent } from './pages/admin/actualizar-examenes/actualizar-examenes.component';
import { ViewExamenPreguntaComponent } from './pages/admin/view-examen-pregunta/view-examen-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[                    // este es un componente hijo de admin por eso tenemos otro route-outle en el dasboard de administrador en el navegador e miraria asi /admin/profile para poder acceder a profile si ponemos solo prifile no nos va a funcionar 
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'categorias',
        component: ViewCategoriasComponent
      },
      {
        path: 'add-categoria',
        component: AddCategoriaComponent
      },
      {
        path: 'examenes',
        component: ViewExamenesComponent
      },
      {
        path: 'add-examen',
        component: AddExamenComponent
      },
      {
        path: 'examen/:examenId',
        component: ActualizarExamenesComponent
      },
      {
        path:'view-preguntas/:examenId/:titulo',
        component: ViewExamenPreguntaComponent
      },
      {
        path: 'add-pregunta/:examenId/:titulo',
        component: AddPreguntaComponent
      },
      {
        path: 'pregunta/:preguntaId',
        component: ActualizarPreguntaComponent
      }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children: [
      {
        path: ':categoriaId',
        component: LoadExamenComponent
                
      },
      {
        path:"instrucciones/:examenId",
        component: InstruccionesComponent
      }
    ],
  },
  {
    path:"start/:examenId",
    component:StartComponent,
    canActivate:[NormalGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  





































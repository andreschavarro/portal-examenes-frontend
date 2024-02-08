import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authInterceptorProviders } from './services/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; 

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component'; 
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenesComponent } from './pages/admin/actualizar-examenes/actualizar-examenes.component'; 
import { ViewExamenPreguntaComponent } from './pages/admin/view-examen-pregunta/view-examen-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { SidebarComponent as appsidebaruser } from './pages/user/sidebar/sidebar.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    ViewExamenesComponent,
    AddExamenComponent,
    ActualizarExamenesComponent,
    ViewExamenPreguntaComponent,
    AddPreguntaComponent,
    ActualizarPreguntaComponent,
    appsidebaruser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule,
    MatListModule,
    CommonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

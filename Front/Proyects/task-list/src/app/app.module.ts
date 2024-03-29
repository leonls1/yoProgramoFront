import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskV20Component } from './components/add-task-v2.0/add-task-v2.0.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaContactosV2Component } from './components/lista-contactos-v2/lista-contactos-v2.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent}, //el camino vacion me lleva directo al componente Task
  {path: 'about', component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskV20Component,
    AboutComponent,
    FooterComponent,
    ListaContactosV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

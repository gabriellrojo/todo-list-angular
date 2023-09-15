import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }

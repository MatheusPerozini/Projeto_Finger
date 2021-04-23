import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {InformacoesComponent} from './informacoes/informacoes.component'
import { LogonComponent } from './logon/logon.component'

const routes: Routes = [
  {path : '' , component : LogonComponent},
  {path : 'home' , component : InformacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

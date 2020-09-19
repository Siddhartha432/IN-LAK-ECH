import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FilosofiaComponent } from './filosofia/filosofia.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProgramacionComponent } from './programacion/programacion.component';

const routes: Routes = [
  {path: '', component:PrincipalComponent},
  {path: 'filosofia', component:FilosofiaComponent},
  {path: 'tienda', component:TiendaComponent},
  {path: 'progra',  component:ProgramacionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

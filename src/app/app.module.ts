import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { FilosofiaComponent } from './filosofia/filosofia.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProgramacionComponent } from './programacion/programacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FilosofiaComponent,
    TiendaComponent,
    ProgramacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.scss']
})
export class ProgramacionComponent implements OnInit {
principal: string='block'; 
 //variables para quitar y poner secciones de información del apartado de "información"
displayone: string ='none';
 displaytwo: string = 'none';
 displaythree: string ='none';
 displayfor: string='none';
//variables para quitar y poner los ejercicios del apartado "ejercicios"
 ejercicio1: string='none';
 ejercicio2: string='none';
 ejercicio3: string='none';
 
//funciones para activar o desactivar los ejercicios del apartado "ejercicios"
 ejerciciouno(){
if(this.ejercicio2=='block'){
  this.ejercicio2='none';
}
if(this.ejercicio3=='block'){
  this.ejercicio3='none';
}
this.ejercicio1='block';
this.principal='none';
 }
 ejerciciodos(){
   if(this.ejercicio1=='block'){
     this.ejercicio1='none';
   }
   if(this.ejercicio3=='block'){
    this.ejercicio3='none';
  }
this.ejercicio2='block';  
 }
 ejerciciotres(){
  if(this.ejercicio1=='block'){
    this.ejercicio1='none';
  }
  if(this.ejercicio2=='block'){
    this.ejercicio2='none';
  }
this.ejercicio3='block';
 }
 //apartado de funciones encargadas  de activar o desactivar la información del apartado "información"
 displayuno(){
  if(this.displaytwo=='block'){
   
    this.displaytwo='none';
    
  }
  if(this.displaythree=='block'){
   this.displaythree='none'
  }
  if(this.displayfor='block'){
    this.displayfor='none';
  }
  this.displayone='block';
  this.principal='none';
}
displaydos(){
  if(this.displayone=='block'){
    this.displayone='none';
  }
  if(this.displaythree=='block'){
   this.displaythree='none'
  }
  if(this.displayfor='block'){
    this.displayfor='none';
  }
  this.displaytwo='block';
  this.principal='none';
}
 displaytres(){
  if(this.displayone=='block'){
    this.displayone='none';
  }
  if(this.displaytwo=='block'){
    this.displaytwo='none';
  }
  if(this.displayfor='block'){
    this.displayfor='none';
  }
   this.displaythree='block';
   this.principal='none';
 }
 displaycuatro(){
  if(this.displayone=='block'){
    this.displayone='none';
  }
  if(this.displaytwo=='block'){
    
    this.displaytwo='none'; 
  }
  if(this.displaythree=='block'){
    this.displaythree='none';
   }
  this.displayfor='block';
  this.principal='none';
 }
 //pantalla principal
 principall(){
  if(this.displayone=='block'){
    this.displayone='none';
  }
  if(this.displaytwo=='block'){
    
    this.displaytwo='none'; 
  }
  if(this.displaythree=='block'){
    this.displaythree='none';
   }
   if(this.displayfor='block'){
    this.displayfor='none';
  }
   this.principal='block';
 }
  constructor() { }

  ngOnInit(): void {
  }

}

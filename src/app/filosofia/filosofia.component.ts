import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filosofia',
  templateUrl: './filosofia.component.html',
  styleUrls: ['./filosofia.component.scss']
})
export class FilosofiaComponent implements OnInit {
occidentalon: string='none';
ocultismoon: string='none';
orientalon: string='none';
color:string='steelblue';
oriental(){
  if(this.ocultismoon='block'){
    this.ocultismoon='none';
  }
  if(this.occidentalon='bock'){
    this.occidentalon='none';
  }
  this.orientalon='block'
  this.color='teal';
}
occidental(){
  if(this.ocultismoon=='block'){
    this.ocultismoon='none';
  }
  if(this.orientalon=='block'){
    this.orientalon='none';
  }
  this.occidentalon='block';
  this.color='teal';
}
ocultismo(){
  if(this.occidentalon='bock'){
    this.occidentalon='none';
  }
  if(this.orientalon='block'){
    this.orientalon='none';
  }
  this.ocultismoon='block';
  this.color='teal';
}
  constructor() { }

  ngOnInit(): void {
  }

}

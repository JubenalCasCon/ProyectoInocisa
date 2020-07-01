import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'






@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
 
  
})


export class PrincipalComponent implements OnInit {


  peliculas:any[]=[
    {name:'Conoce a Inocisa',
    img:'assets/Imagenes/quedate4.jpg',
    desc:'',
    link:'/nosotros',
    boton:'Sobre nosotros'  },
    {
      name:'Nosotros somos los que trabajamos por Sinaloa',
      img:'assets/Imagenes/quedate2.jpg',
      desc:'',
      link:'/contacto',
      boton:'Contacto'
    },

    {
      name:'Nosotros somos los que trabajamos por Sinaloa',
      img:'assets/Imagenes/quedate5.jpg',
      desc:'',
      link:'/servicio',
      boton:'Info Servicios'
    }
  ];



  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  fotocabecera:string="assets/Imagenes/beso.jpg"

personalcard:string="assets/Imagenes/foto82.jpg"
instalacionescard:string="assets/Imagenes/Instalaciones.jfif"
asesorcard:string="assets/Imagenes/foto87.jpg"







  constructor(private _config:NgbCarouselConfig) {}

   

  
  ngOnInit(): void {
  
    

  }



}

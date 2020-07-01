import { Component, OnInit } from '@angular/core';
import{trigger,style,transition,animate, state} from '@angular/animations';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  animations:[
    
    
    
    
    trigger('showUp',[
      state('0',style({
       
       height:'2em',
       
        
      })),
      state('1',style({
        
       height:'8em',
       
      
      })),
      transition('0 => 1',animate('0.8s ease-in')),
      transition('1 => 0',animate('0.8s  ease-out'))

    ])
  ]
})
export class ServiciosComponent implements OnInit {
fotoservicio:string='assets/Imagenes/foto82.jpg';

public mostrarinformacion: boolean = false;
public mostrarenfermeria :boolean = false;
public mostrarestancia : boolean = false;
public mostrarprocedimientos: boolean = false;
public mostrarcapacitacion:boolean = false;

  constructor() {
 

   }

  ngOnInit(): void {
  }

  cambiarvalor()
  {
    this.mostrarinformacion = !this.mostrarinformacion;
  }

  cambiarenfermeria()
  {
    this.mostrarenfermeria = !this.mostrarenfermeria;
  }

  cambiarestancia()
  {
    this.mostrarestancia = !this.mostrarestancia;
  }

  cambiarprocedimientos()
  {
    this.mostrarprocedimientos = !this.mostrarprocedimientos;
  }

  cambiarcapacitacion()
  {
    this.mostrarcapacitacion = !this.mostrarcapacitacion;
  }

 
}

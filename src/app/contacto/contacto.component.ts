import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  fotocontacto:string="assets/Imagenes/foto87.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

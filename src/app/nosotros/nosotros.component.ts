import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  seccionnosotros:string="assets/Imagenes/fotografia1.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public s_iconos:string[]=['mr-2', 'mb-3', 'mt-3', 'px-4', 'py-2','estilosfooter'];


  constructor() { }

  ngOnInit(): void {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PruebaComponent } from './prueba/prueba.component'

const routes:Routes=[{path:'',component:PrincipalComponent},
                     {path:'nosotros',component:NosotrosComponent},
                     {path:'servicio',component:ServiciosComponent},
                     {path:'instalaciones',component:InstalacionesComponent},
                     {path:'contacto',component:ContactoComponent},
                     {path:'prueba',component:PruebaComponent}
                    
                    
                    ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    NosotrosComponent,
    ServiciosComponent,
    InstalacionesComponent,
    ContactoComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

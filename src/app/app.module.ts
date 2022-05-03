import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CongeadministratifComponent } from './congeadministratif/congeadministratif.component';
import { CongeexceptionnelComponent } from './congeexceptionnel/congeexceptionnel.component';
import { CongemaladieComponent } from './congemaladie/congemaladie.component';
import { CongematerniteComponent } from './congematernite/congematernite.component';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { AvisretourComponent } from './avisretour/avisretour.component';
import { LesdecisionComponent } from './lesdecision/lesdecision.component';
import { ProfilComponent } from './profil/profil.component';
import { ConsulterdemandeComponent } from './consulterdemande/consulterdemande.component';

@NgModule({
  declarations: 
  [AppComponent, SidebarComponent, CongeadministratifComponent, CongeexceptionnelComponent, CongemaladieComponent, CongematerniteComponent, MesdemandesComponent, AvisretourComponent, LesdecisionComponent, ProfilComponent, ConsulterdemandeComponent],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

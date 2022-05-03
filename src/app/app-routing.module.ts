import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisretourComponent } from './avisretour/avisretour.component';
import { CongeadministratifComponent } from './congeadministratif/congeadministratif.component';
import { CongeexceptionnelComponent } from './congeexceptionnel/congeexceptionnel.component';
import { CongemaladieComponent } from './congemaladie/congemaladie.component';
import { CongematerniteComponent } from './congematernite/congematernite.component';
import { ConsulterdemandeComponent } from './consulterdemande/consulterdemande.component';
import { LesdecisionComponent } from './lesdecision/lesdecision.component';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes =[
  {path:"",component:ProfilComponent},
  {path:"congeadministratif",component:CongeadministratifComponent},
  {path:"congeaexceptionnel",component:CongeexceptionnelComponent},
  {path:"congemaladie",component:CongemaladieComponent},
  {path:"congematernite",component:CongematerniteComponent},
  {path:"mesdemandes",component:MesdemandesComponent},
  {path:"avisretour",component:AvisretourComponent},
  {path:"lesdecision",component:LesdecisionComponent},
  {path:"consulterdemande",component:ConsulterdemandeComponent},
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

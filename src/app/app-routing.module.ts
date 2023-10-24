import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CompetencesComponent } from './competences/competences.component';
import { CompetencesSoftSkillsComponent } from './competences-soft-skills/competences-soft-skills.component';
import { CertificatsComponent } from './certificats/certificats.component';
import { ProjetsAcademiquesComponent } from './projets-academiques/projets-academiques.component';
import { ProjetsPersonnelComponent } from './projets-personnel/projets-personnel.component';
import { AProposDeMoiComponent } from './apropos-de-moi/apropos-de-moi.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path : 'Formation', component : FormationComponent},
  {path : 'Expériences', component :ExperiencesComponent},
  {path: 'Compétences', component: CompetencesComponent},
  {path: 'CompétencesSoftSkills', component: CompetencesSoftSkillsComponent},
  {path: 'Certificats', component : CertificatsComponent},
  {path :'ProjetsAcadémiques', component : ProjetsAcademiquesComponent},
  {path: 'ProjetsPersonnels',component : ProjetsPersonnelComponent},
  {path: 'ÀProposDeMoi', component : AProposDeMoiComponent},
  {path : 'ContactMe',component : ContactMeComponent },
  {path : '**', component : AProposDeMoiComponent, pathMatch:'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

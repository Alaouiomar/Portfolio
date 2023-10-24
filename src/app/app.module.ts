import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FormationComponent } from './formation/formation.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CompetencesComponent } from './competences/competences.component';
import { CompetencesSoftSkillsComponent } from './competences-soft-skills/competences-soft-skills.component';
import { CertificatsComponent } from './certificats/certificats.component';
import { ProjetsAcademiquesComponent } from './projets-academiques/projets-academiques.component';
import { ProjetsPersonnelComponent } from './projets-personnel/projets-personnel.component';
import { AProposDeMoiComponent } from './apropos-de-moi/apropos-de-moi.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FormationComponent,
    ExperiencesComponent,
    CompetencesComponent,
    CompetencesSoftSkillsComponent,
    CertificatsComponent,
    ProjetsAcademiquesComponent,
    ProjetsPersonnelComponent,
    AProposDeMoiComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-competences-soft-skills',
  templateUrl: './competences-soft-skills.component.html',
  styleUrls: ['./competences-soft-skills.component.css']
})
export class CompetencesSoftSkillsComponent {
  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - CompétencesSoftSkills') ;
  }
}

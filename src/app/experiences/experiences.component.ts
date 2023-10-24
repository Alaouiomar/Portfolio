import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - Expériences') ;
  }
}

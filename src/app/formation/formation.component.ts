import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - Formation') ;
  }
}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projets-academiques',
  templateUrl: './projets-academiques.component.html',
  styleUrls: ['./projets-academiques.component.css']
})
export class ProjetsAcademiquesComponent {
  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - ProjetsAcadémiques') ;
  }
}

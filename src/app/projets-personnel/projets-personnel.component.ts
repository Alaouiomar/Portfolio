import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projets-personnel',
  templateUrl: './projets-personnel.component.html',
  styleUrls: ['./projets-personnel.component.css']
})
export class ProjetsPersonnelComponent {
  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - ProjetsPersonnels') ;
  }
}

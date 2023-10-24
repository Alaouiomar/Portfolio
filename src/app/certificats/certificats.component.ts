import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-certificats',
  templateUrl: './certificats.component.html',
  styleUrls: ['./certificats.component.css']
})
export class CertificatsComponent {

  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - Certificats') ;
  }
}

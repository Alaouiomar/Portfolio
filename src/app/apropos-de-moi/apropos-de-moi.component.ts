import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apropos-de-moi',
  templateUrl: './apropos-de-moi.component.html',
  styleUrls: ['./apropos-de-moi.component.css']
})
export class AProposDeMoiComponent {

  constructor(private titleService : Title) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - ÀProposDeMoi') ;
  }

}

import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
 
  constructor(private titleService : Title, private renderer: Renderer2) {
    this.titleService. setTitle('EL Alaoui El Aoufoussi Omar - ContactMe') ;
  }

  @ViewChild('inputs') inputs!: ElementRef[];


  
  ngAfterViewInit() {
    this.inputs.forEach(input => {
      this.renderer.listen(input.nativeElement, 'focus', () => this.focusFunc(input.nativeElement));
      this.renderer.listen(input.nativeElement, 'blur', () => this.blurFunc(input.nativeElement));
    });
  }
  focusFunc(input: HTMLElement) {
    const parent = input.parentNode as HTMLElement;
    this.renderer.addClass(parent, 'focus');
  }

  blurFunc(input: HTMLElement) {
    const parent = input.parentNode as HTMLElement;
    if (input instanceof HTMLInputElement && input.value === '') {
      this.renderer.removeClass(parent, 'focus');
    }
  }
  
}

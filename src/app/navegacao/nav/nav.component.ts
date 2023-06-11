import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  animations: [ 
    trigger('opacityScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class NavComponent {
  
  isMenu = false;
  isMobileMenu = false;

  constructor() { }
  
  toggleMenu(){
    this.isMenu = !this.isMenu;
  }

  toggleMobileMenu(){
    this.isMobileMenu = !this.isMobileMenu;
  }
}
    
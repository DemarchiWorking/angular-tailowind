 /**
  * Welcome to TWUING
  * 
  * A Tailwind UI to Angular component converter.
  * 
  * How to use:
  * 0. Log in to get started for free
  * 1. Copy a component template from TailwindUI.com
  * 2. Paste it into the input field of TWUING.dev which will generate the Angular component version.
  * 3. Copy the generated Typescript and HTML code into your project. That's it!
  * 
  * [Optional] - Use the dropdown to edit the component selector or class name
  * [Optional] - Convert animations by pasting the animation description. 
  * i.e: Entering: "duration-150 ease-out"
  *        From: "opacity-0 scale-95"
  *        To: "opacity-100 scale-100"
  *      Leaving: "duration-100 ease-in"
  *        From: "opacity-100 scale-100"
  *        To: "opacity-0 scale-95"
  *         
  * Below is an example of the generate Typescript code.
  */
 
 import { Component } from '@angular/core';
 import { trigger, transition, style, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
 
 @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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
 export class AppComponent {
    showMenu = false;
    isDarkEnable = false;
    presentTheme$ = new BehaviorSubject<string>('theme-light');
    
    constructor() {}
    ngOnInit() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.presentTheme$.next(savedTheme);
      }
    }
    toggleMenu(){
        this.showMenu = !this.showMenu;
    }
    changeTheme() {
      this.presentTheme$.value === 'theme-light'
        ? this.presentTheme$.next('theme-dark')
        : this.presentTheme$.next('theme-light');
      localStorage.setItem('theme', this.presentTheme$.value);
      this.isDarkEnable = !this.isDarkEnable;
    }
 }
 
 
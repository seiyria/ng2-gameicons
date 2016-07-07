import { Directive, ElementRef } from '@angular/core';

import 'gameicons-font/dist/game-icons.css';

@Directive({
  selector: '[gi]',
  inputs: ['icon']
})
export class GameIconsDirective {
  static get parameters() {
    return [[ElementRef]];
  }

  constructor(elementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnChanges() {
    this.el.className = '';
    this.el.classList.add(...this.iconClass());
  }

  iconClass() {
    const classes = ['game-icon', `game-icon-${this.icon}`];
    return classes;
  }
}

import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBordered]'
})

export class BorderedDirective implements OnInit {
  @Input() borderColor = 'transparent';
  @HostBinding('style.borderColor') bdrColor: string | undefined;

  constructor() {}
  ngOnInit(): void {
    this.bdrColor = this.borderColor;
  }

}


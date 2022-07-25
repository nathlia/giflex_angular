import {Directive, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[ngInit]'
})
export class NgInitDirective {
  @Output() trigger: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.trigger.emit();
  }
}
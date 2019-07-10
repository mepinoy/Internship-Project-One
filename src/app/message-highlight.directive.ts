import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMessageHighlight]'
})
export class MessageHighlightDirective {
@Input('appMessageHighlight') public highlightColor: string
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter')
  handleOnEnter() {
    this.applyStyles(this.highlightColor || 'lightblue', '3px solid white');
  }

  @HostListener('mouseleave')
  handleOnLeave() {
    this.applyStyles(null, null);
  }

  applyStyles(backgroundColor: string, border: string): void {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.border = border;
  }
}

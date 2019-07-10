import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchHighlight]'
})
export class SearchHighlightDirective {
@Input('appSearchHighlight') public image: string
constructor(private el:ElementRef) { }

@HostListener('mouseenter')
handleOnEnter() {
  this.applyStyles("fa fa-caret-left");
}

@HostListener('mouseleave')
handleOnLeave() {
  this.applyStyles("fa fa-search");
}

applyStyles(image: string): void {
  this.el.nativeElement.className = image;
}
}

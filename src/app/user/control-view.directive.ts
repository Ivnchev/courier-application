import { Directive, ElementRef, Renderer2, OnChanges, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appIsVisible]',
  exportAs: 'appIsVisible'
})
export class ControlViewDirective implements OnChanges {

  @HostBinding('class.is-visible') get isVisible() {
    return this.appIsVisible
  }

  @Input() appIsVisible 

  constructor(
    public elementRef: ElementRef,
    public render: Renderer2
  ) { }

  @HostListener('mouseclick', ['$event']) onMouseClick(e) {
    this.appIsVisible = !this.appIsVisible
    this.ngChangeVisibility()
  }

  ngChangeVisibility(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'display',
      this.appIsVisible ? 'none' : 'block'
      )
  }


  ngOnChanges(): void {
    this.ngChangeVisibility()
  }

}

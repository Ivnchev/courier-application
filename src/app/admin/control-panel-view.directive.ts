import { Directive, HostBinding, Input, ElementRef, Renderer2, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appControlPanelView]',
  exportAs: 'appControlPanelView'
})
export class ControlPanelViewDirective implements OnChanges {
  
  @HostBinding('class.is-visible') get isVisible() {
    return this.appControlPanelView
  }

  @Input() appControlPanelView 

  constructor(
    public elementRef: ElementRef,
    public render: Renderer2
  ) { }

  @HostListener('mouseclick', ['$event']) onMouseClick(e) {
    this.appControlPanelView = !this.appControlPanelView
    this.ngChangeVisibility()
  }

  ngChangeVisibility(): void {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'display',
      this.appControlPanelView ? 'none' : 'block'
      )
  }


  ngOnChanges(): void {
    this.ngChangeVisibility()
  }
}

import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appObserverChild]',
})
export class ObserverChildDirective implements AfterViewInit {
  @Input() observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer.observe(this.el.nativeElement);
  }

  static ngTemplateContextGuard(
    directive: ObserverChildDirective,
    context: unknown
  ): context is ObserverChildContext {
    return true;
  }
}

interface ObserverChildContext {
  observer: IntersectionObserver;
}

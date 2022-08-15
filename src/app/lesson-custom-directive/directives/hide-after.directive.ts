import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

class Context {
  counter: number = 0;
}

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
  private _counter = 0;
  @Input() set hideAfter(value: number) {
    this._counter = this.context.counter = value;
  }
  @Input() hideAfterNote: TemplateRef<Context> | null = null;

  context = new Context();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<Context>
  ) {}

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    const a = setInterval(() => {
      this.context.counter -= 1000;
    }, 1000);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.hideAfterNote) {
        this.viewContainerRef.createEmbeddedView(
          this.hideAfterNote,
          this.context
        );
      }
      clearInterval(a);
    }, this._counter);
  }

  ngAfterViewInit() {}

  static ngTemplateContextGuard(
    dir: HideAfterDirective,
    ctx: unknown
  ): ctx is Context {
    return true;
  }
}

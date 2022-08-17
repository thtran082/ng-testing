import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-dynamic-container",
  template: `
    <h1 class="text-2xl font-bold mb-4">Creating dynamic components with ComponentFactoryResolver</h1>
    <button nz-button nzType="primary" class="mr-4" (click)="addDynamicOne()">add dynamic component 1</button>
    <button nz-button nzType="primary" class="mr-4" (click)="addDynamicTwo()">add dynamic component 2</button>
    <button nz-button nzType="primary" class="mr-4" (click)="clearDynamic()">Clear dynamic components</button>
    <div #dynamicComponent></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild("dynamicComponent", { static: true, read: ViewContainerRef }) containerRef!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  async addDynamicOne() {
    const injector = this.containerRef.injector;
    const { ContentOneComponent } = await import("../content-one/content-one.component");
    this.containerRef.clear();

    const componentFactory = this.cfr.resolveComponentFactory(ContentOneComponent)
    const componentRef = this.containerRef.createComponent(componentFactory, 0, injector);
    componentRef.instance.data = { bio: "I hope you'll like it" };
  }

  async addDynamicTwo() {
    const injector = this.containerRef.injector;
    const { ContentTwoComponent } = await import("../content-two/content-two.component");
    this.containerRef.clear();

    const componentFactory = this.cfr.resolveComponentFactory(ContentTwoComponent)
    const componentRef = this.containerRef.createComponent(componentFactory, 0, injector);
    componentRef.instance.data = { bio: "No more data here" };
  }

  clearDynamic() {
    this.containerRef.clear();
  }
}

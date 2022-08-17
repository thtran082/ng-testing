import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[libCommonTableHeader][key]",
  exportAs: "libCommonTableHeader"
})
export class CommonTableHeaderDirective<T> {
  @Input() key!: string;
  constructor(public template: TemplateRef<T>) {
  }

}

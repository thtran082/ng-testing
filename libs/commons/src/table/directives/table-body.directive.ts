import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: `[libCommonTableBody][key]`,
  exportAs: `libCommonTableBody`
})
export class CommonTableBodyDirective<T> {
  @Input() key!: string;

  constructor(public template: TemplateRef<T>) {
  }
}

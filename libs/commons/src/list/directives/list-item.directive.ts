import { Directive } from "@angular/core";

@Directive({
  selector: `ng-template[libListItem]`,
})
export class CommonListItemDirective {
  constructor() {
  }
}

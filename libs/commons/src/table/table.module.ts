import { NgModule } from "@angular/core";
import { CommonTableHeaderDirective } from "./directives/table-header.directive";
import { CommonTableBodyDirective } from "./directives/table-body.directive";
import { CommonTableComponent } from "./containers";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonTableHeaderDirective, CommonTableBodyDirective, CommonTableComponent
  ],
  declarations: [
    CommonTableHeaderDirective, CommonTableBodyDirective, CommonTableComponent
  ],
})
export class CommonTableModule {
}

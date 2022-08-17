import { NgModule } from "@angular/core";
import { ExamplesListComponent } from "./list.component";
import { CommonModule } from "@angular/common";
import { CommonListModule, CommonsCodeModule } from "@common";


@NgModule({
  imports: [CommonModule, CommonsCodeModule, CommonListModule],
  exports: [ExamplesListComponent],
  declarations: [ExamplesListComponent]
})
export class ExampleListModule {
}

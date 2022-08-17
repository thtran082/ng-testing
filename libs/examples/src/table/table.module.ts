import { NgModule } from "@angular/core";
import { ExampleTableComponent } from "./table.component";
import { CommonsCodeModule, CommonTableModule } from "@common";

@NgModule({
  declarations: [ExampleTableComponent],
  imports: [CommonsCodeModule, CommonTableModule],
  exports: [ExampleTableComponent],
  providers: [],
})
export class ExampleTableModule {
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonsCodeComponent } from "./containers";

const COMPONENTS = [
  CommonsCodeComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class CommonsCodeModule {
}

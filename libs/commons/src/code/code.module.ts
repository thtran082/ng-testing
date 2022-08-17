import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonsCodeComponent } from "./containers";
import { HighlightModule } from "ngx-highlightjs";

const COMPONENTS = [
  CommonsCodeComponent,
];

@NgModule({
  imports: [CommonModule, HighlightModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class CommonsCodeModule {
}

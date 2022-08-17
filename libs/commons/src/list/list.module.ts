import { NgModule } from "@angular/core";
import { CommonListComponent } from "./containers";
import { CommonListItemDirective } from "./directives";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [CommonListComponent, CommonListItemDirective],
  declarations: [CommonListComponent, CommonListItemDirective],
})
export class CommonListModule {}

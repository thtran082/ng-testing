import { OverlayModule } from "@angular/cdk/overlay";
import { NgModule } from "@angular/core";
import { LessonCdkOverlayRouting } from "./cdk-overlay.routing";
import { A11yModule } from "@angular/cdk/a11y";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzFormModule } from "ng-zorro-antd/form";
import { DropdownSearchComponent } from "./dropdown-search/dropdown-search.component";
import { FormsModule } from "@angular/forms";
import { AsyncPipe, NgForOf, NgIfContext } from "@angular/common";

@NgModule({
  imports: [LessonCdkOverlayRouting, OverlayModule, A11yModule, NzInputModule, NzFormModule, FormsModule, AsyncPipe, NgForOf],
  declarations: [DropdownSearchComponent],
})
export class LessonCdkOverlayModule {
}

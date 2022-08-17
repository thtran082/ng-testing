import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessonDynamicRoutingModule } from "./lesson-dynamic.routing";
import { DynamicComponentComponent } from "./dynamic-component/dynamic-component.component";
import { DynamicContainerComponent } from "./dynamic-container/dynamic-container.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ContentOneComponent } from "./content-one/content-one.component";
import { ContentTwoComponent } from "./content-two/content-two.component";


@NgModule({
  declarations: [
    DynamicComponentComponent,
    DynamicContainerComponent,
    ContentOneComponent,
    ContentTwoComponent,
  ],
  imports: [
    CommonModule, LessonDynamicRoutingModule, NzButtonModule
  ]
})
export class LessonDynamicComponentsModule {
}

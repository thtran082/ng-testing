import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DynamicComponentComponent } from "./dynamic-component/dynamic-component.component";

const routes: Routes = [
  {
    path: '',
    component: DynamicComponentComponent,
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LessonDynamicRoutingModule { }

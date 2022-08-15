import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CustomDirectiveComponent } from "./custom-directive/custom-directive.component";

const routes: Routes = [
  {
    path: '',
    component: CustomDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class CustomDirectiveRoutingModule { }

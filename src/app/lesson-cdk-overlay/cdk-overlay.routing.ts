import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownSearchComponent } from "./dropdown-search/dropdown-search.component";

const routes: Routes = [
  {
    path: '',
    component: DropdownSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonCdkOverlayRouting {}

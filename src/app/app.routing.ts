import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "change-detection",
    loadChildren: () => import("./lesson-change-detection/change-detection.module").then(m => m.ChangeDetectionModule),
  },
  {
    path: "lesson-router",
    loadChildren: () => import("./lesson-router/lesson-router.module").then(m => m.LessonRouterModule),
  },
  {
    path: "custom-directive",
    loadChildren: () => import("./lesson-custom-directive/custom-directive.module").then(m => m.CustomDirectiveModule),
  },
  {
    path: "dynamic-component",
    loadChildren: () => import("./lesson-dynamic-components/lesson-dynamic-components.module").then(m => m.LessonDynamicComponentsModule),
  },
  {
    path: "dropdown-search",
    loadChildren: () => import("./lesson-cdk-overlay/cdk-overlay.module").then(m => m.LessonCdkOverlayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

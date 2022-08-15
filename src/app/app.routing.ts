import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'change-detection',
    loadChildren: () => import('./lesson-change-detection/change-detection.module').then(m => m.ChangeDetectionModule),
  },
  {
    path: 'lesson-router',
    loadChildren: () => import('./lesson-router/lesson-router.module').then(m => m.LessonRouterModule),
  },
  {
    path: 'custom-directive',
    loadChildren: () => import('./lesson-custom-directive/custom-directive.module').then(m => m.CustomDirectiveModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LessonRouterComponent } from "./lesson-router.component";
import { LessonRouterRoutingModule } from "./lesson-router.routing";
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [LessonRouterRoutingModule],
  exports: [],
  declarations: [HomeComponent, LessonRouterComponent, AdminComponent],
  providers: [],
})
export class LessonRouterModule {}

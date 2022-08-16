import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { LessonRouterComponent } from "./lesson-router.component";
import { LessonRouterRoutingModule } from "./lesson-router.routing";
import { AdminComponent } from "./admin/admin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzModalModule } from "ng-zorro-antd/modal";
import { GuardModalComponent } from './admin/guard-modal/guard-modal.component';

@NgModule({
  imports: [
    LessonRouterRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
  ],
  exports: [],
  declarations: [HomeComponent, LessonRouterComponent, AdminComponent, GuardModalComponent],
  providers: [],
})
export class LessonRouterModule {
}

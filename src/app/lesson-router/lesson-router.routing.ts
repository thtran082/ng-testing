import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth/auth.guard";
import { PermissionGuard } from "./auth/permission.guard";
import { HomeComponent } from "./home/home.component";
import { LessonRouterComponent } from "./lesson-router.component";
import { FormGuardGuard } from "./guard/form-guard.guard";

const routes: Routes = [
  {
    path: '',
    component: LessonRouterComponent,
    canActivateChild: [PermissionGuard],
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
        canDeactivate: [FormGuardGuard],
        data: {
          guard: 'are you want to leave? Your data will be lost!'
        }
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonRouterRoutingModule { }

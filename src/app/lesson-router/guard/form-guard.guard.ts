import { Injectable } from "@angular/core";
import { ActivatedRoute, CanDeactivate } from "@angular/router";
import { map, Observable, Subject, switchMap, withLatestFrom } from "rxjs";
import { AdminComponent } from "../admin/admin.component";
import { NzModalService } from "ng-zorro-antd/modal";
import { GuardModalComponent } from "../admin/guard-modal/guard-modal.component";

@Injectable({
  providedIn: "any"
})
export class FormGuardGuard implements CanDeactivate<AdminComponent> {
  constructor(private modal: NzModalService, private route: ActivatedRoute) {
  }

  canDeactivate(component: AdminComponent): Observable<boolean> | boolean {
    const redirect$ = new Subject<boolean>();
    if (!component.form.dirty) {
      return true;
    }
    return component.route.data.pipe(
      switchMap(({ guard }) => {
        const cmp = this.modal.confirm<GuardModalComponent>({
          nzTitle: guard,
          nzContent: GuardModalComponent,
          nzOnOk: () => redirect$.next(true),
          nzOnCancel: () => redirect$.next(false),
          nzComponentParams: {
            inputData: "are you oke?"
          }
        });
        return cmp.afterClose.asObservable().pipe(
          withLatestFrom(redirect$),
          map(([, redirect]) => redirect)
        )
      })
    );
  }

}

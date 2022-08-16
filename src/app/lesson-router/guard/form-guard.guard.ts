import { Injectable } from "@angular/core";
import { ActivatedRoute, CanDeactivate, Router } from "@angular/router";
import { map, Observable, Subject, switchMap, tap, withLatestFrom } from "rxjs";
import { AdminComponent } from "../admin/admin.component";
import { NzModalService } from "ng-zorro-antd/modal";
import { GuardModalComponent } from "../admin/guard-modal/guard-modal.component";
import { FormSafeData } from "./form-safe-data";

@Injectable({
  providedIn: "any"
})
export class FormGuardGuard implements CanDeactivate<FormSafeData> {
  constructor(private modal: NzModalService) {
  }

  canDeactivate(component: FormSafeData): Observable<boolean> | boolean {
    const redirect$ = new Subject<boolean>();
    if (component.isDataSaved) {
      return true;
    }

    return component.routerData$.pipe(
      switchMap(({ guard }) => {
        console.log("im here");
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

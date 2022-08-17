import { Component } from "@angular/core";
import { combineLatest, of, switchMap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-home",
  template: `
    <form nz-form
          [nzLayout]="'inline'"
          ngForm
          #form="ngForm"
          [ngFormOptions]="{ updateOn: 'change' }"
          (ngSubmit)="onSubmit(form.value)">
      <nz-form-item>
        <nz-form-control nzErrorTip="den vcl">
          <nz-form-label nzFor="email">email</nz-form-label>
          <input appForbiddenName="denvcl" nz-input type="text" [(ngModel)]="email" name="email"/>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control>
          <nz-form-label nzFor="password">password</nz-form-label>
          <input nz-input type="password" [(ngModel)]="password" name="password"/>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <button nz-button nzType="primary" nzDanger>Submit</button>
      </nz-form-item>
    </form>
  `,
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  readonly vm$ = combineLatest([this.authService.isLoggedIn$]).pipe(switchMap(([isLoggedIn]) => of({ isLoggedIn })));

  email = "";
  password = "";

  constructor(private authService: AuthService) {
  }

  onSubmit({ email, password }: { email: string, password: string }): void {
    console.log(email, password);
  }
}

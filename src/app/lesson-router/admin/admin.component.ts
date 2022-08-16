import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-admin",
  template: `
    <div class="container">
      <form nz-form [formGroup]="form" [nzLayout]="'inline'" (ngSubmit)="submit()">
        <nz-form-item>
          <nz-form-label nzRequired nzFor="firstName">first name</nz-form-label>
          <nz-form-control  [nzSpan]="12" nzHasFeedback nzValidatingTip="Validating..." [nzErrorTip]="firstNameError">
            <input nz-input formControlName="firstName" id="firstName" placeholder="first name"/>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label nzRequired nzFor="lastName">Last Name</nz-form-label>
          <nz-form-control [nzSm]="14" [nzXs]="24" nzErrorTip="please fill your last name">
            <input nz-input formControlName="lastName" id="lastName" placeholder="last name"/>
          </nz-form-control>
        </nz-form-item>
        <button nz-button nzType="primary">Submit</button>
      </form>
    </div>

    <ng-template #firstNameError let-control>
      <ng-container>Please input your first name!</ng-container>
    </ng-template>
  `,
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {

  readonly form = this._fb.group({
    firstName: ["", [Validators.required]],
    lastName: ["", Validators.required]
  });

  constructor(private authService: AuthService, private _fb: FormBuilder, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
    });
  }

  submit() {
    console.log(this.form.get('firstName')?.hasError('required'));
  }
}

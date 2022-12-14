import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  UntypedFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@ng-testing/services';
import { map, Observable, switchMap, timer } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { FormSafeData } from '../guard/form-safe-data';

@Component({
  selector: 'app-admin',
  template: `
    <div class="container">
      <form
        nz-form
        [formGroup]="form"
        [nzLayout]="'inline'"
        (submit)="submit()"
      >
        <nz-form-item>
          <nz-form-label nzRequired nzFor="firstName">first name</nz-form-label>
          <nz-form-control
            [nzSpan]="12"
            nzHasFeedback
            nzValidatingTip="Validating..."
            [nzErrorTip]="firstNameError"
          >
            <input
              nz-input
              formControlName="firstName"
              id="firstName"
              placeholder="first name"
            />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-label nzRequired nzFor="lastName">Last Name</nz-form-label>
          <nz-form-control
            [nzSm]="14"
            [nzXs]="24"
            nzErrorTip="please fill your last name"
          >
            <input
              nz-input
              formControlName="lastName"
              id="lastName"
              placeholder="last name"
            />
          </nz-form-control>
        </nz-form-item>
        <button nz-button nzType="primary">Submit</button>
      </form>
    </div>

    <ng-template #firstNameError let-control>
      <ng-container *ngIf="control.hasError('email')"
        >Please input your email!</ng-container
      >
      <ng-container *ngIf="control.hasError('minLength')"
        >Minlength should be 10</ng-container
      >
      <ng-container *ngIf="control.hasError('duplicateUser')">
        first name has been existed.</ng-container
      >
    </ng-template>
  `,
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit, FormSafeData {
  readonly form = this._fb.group({
    firstName: [
      '',
      Validators.compose([Validators.email, Validators.minLength(10)]),
      validateUserNameFromApi(this.api),
    ],
    lastName: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private _fb: UntypedFormBuilder,
    private route: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {}

  submit() {
    throw new Error('something');
  }

  readonly routerData$ = this.route.data;

  get isDataSaved(): boolean {
    return !this.form.dirty;
  }
}

const validateUserNameFromApi = (api: ApiService): ValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(300).pipe(
      switchMap(() =>
        api.getUsers().pipe(
          map((users) => users.find((user) => user.username === control.value)),
          map((isValid) => (!isValid ? null : { duplicateUser: true }))
        )
      )
    );
  };
};

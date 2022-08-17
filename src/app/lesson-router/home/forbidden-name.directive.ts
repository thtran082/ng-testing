import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: "[appForbiddenName]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true
    }
  ]
})
export class ForbiddenNameDirective implements Validator {
  @Input("appForbiddenName") name: string = "";

  validate(control: AbstractControl): ValidationErrors | null {
    return this.name ? forbiddenNameValidator(new RegExp(this.name))(control) : null;
  }
}

const forbiddenNameValidator = (regExp: RegExp): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return regExp.test(control.value) ? { forbiddenName: { value: control.value } } : null;
  }
}

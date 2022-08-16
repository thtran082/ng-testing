import { Observable } from "rxjs";

export interface FormSafeData {
  readonly isDataSaved: boolean;
  readonly routerData$: Observable<any>;
}

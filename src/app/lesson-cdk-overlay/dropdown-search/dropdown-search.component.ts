import { Component, ElementRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  BehaviorSubject,
  combineLatest, delay,
  filter,
  finalize,
  iif,
  map,
  merge,
  Observable,
  of,
  switchMap,
  tap
} from "rxjs";
import { CdkConnectedOverlay } from "@angular/cdk/overlay";
import { FocusMonitor } from "@angular/cdk/a11y";
import { NzInputDirective } from "ng-zorro-antd/input";
import { ApiService } from "@ng-testing/services";

@Component({
  selector: "app-dropdown-search",
  templateUrl: "./dropdown-search.component.html",
  styleUrls: ["./dropdown-search.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownSearchComponent {
  searchKey = "";

  @ViewChild(NzInputDirective, { static: true, read: ElementRef }) private inputEl!: ElementRef<HTMLInputElement>;
  @ViewChild(CdkConnectedOverlay, { static: true }) private connectedOverlay!: CdkConnectedOverlay;
  @ViewChild(NgForm, { static: true }) form!: NgForm;

  private isPanelVisible$!: Observable<boolean>;

  public showPanel$!: Observable<boolean>;
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private focusMonitor: FocusMonitor, private api: ApiService) {
  }

  ngOnInit(): void {
    this.isPanelVisible$ = combineLatest([
      this.form.valueChanges!.pipe(
        filter(val => !!val.searchKey || !!this.searchKey),
      ),
      this.focusMonitor.monitor(this.inputEl)
    ]).pipe(
      delay(100),
      switchMap(([value, focused]) =>
        iif(
          () => !!value.searchKey && !!focused,
          of(true),
          of(false),
        )
      )
    );

    this.showPanel$ = merge(this.connectedOverlay.backdropClick.pipe(map(() => false)), this.isPanelVisible$);

    this.isPanelVisible$
      .pipe(
        tap(() => this.loading$.next(true)),
        switchMap((isVisibled) => {
          if (!isVisibled) return of(isVisibled);
          return this.api.getUsers().pipe(
            map((val) => {
              val = val.map(item => item.name);
              this.data$.next(val);
              return of(isVisibled);
            }),
            finalize(() => this.loading$.next(false)),
          );
        })
      )
      .subscribe()
  }

  public onSelectSuggestion(item: string): void {
    alert(item);
  }
}

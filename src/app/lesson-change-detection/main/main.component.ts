import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  value: string[] = ['10'];
  length = 0;

  constructor(
    public renderService: RenderService,
    public cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.value.push('20');
  }

  addRender() {
    this.renderService.addRender(this.constructor.name);
  }

  ngDoCheck() {
    this.renderService.addDoCheckRender(this.constructor.name);
    console.log(
      '%c' + this.constructor.name + ': ngDoCheck',
      'border: 1px solid violet'
    );
    if (this.length!== this.value.length) {
      this.cdr.markForCheck();
    } 
  }

  ngOnChanges() {
    // console.log(this.constructor.name, ': ngOnChanges');
    this.length = this.value.length;
  }

  ngAfterContentChecked() {
    // console.log('%c' + this.constructor.name + ': ngAfterContentChecked', 'border: 1px solid violet');
  }

  ngAfterViewChecked() {
    // console.log('%c' + this.constructor.name + ': ngAfterViewChecked', 'border: 1px solid violet');
  }

  onclick() {}
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-submain',
  templateUrl: './submain.component.html',
  styleUrls: ['./submain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmainComponent implements OnInit {
  @Input() value?: string[]

  constructor(public renderService: RenderService, private cdr: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
  }

  addRender() {
    this.renderService.addRender(this.constructor.name);
  }

  ngDoCheck() {
  this.renderService.addDoCheckRender(this.constructor.name);
    console.log(this.constructor.name, ': ngDoCheck');
  }

  ngOnChanges() {
    // console.log('%c' + this.constructor.name + ': ngOnChanges', 'border: 1px solid orange');
  }
}

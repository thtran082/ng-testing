import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgreeComponent implements OnInit {
  constructor(public renderService: RenderService) {}

  ngOnInit(): void {}

  addRender() {
    this.renderService.addRender(this.constructor.name);
  }

  ngDoCheck() {
    this.renderService.addDoCheckRender(this.constructor.name);
    console.log(
      '%c' + this.constructor.name + ': ngDoCheck',
      'color: red; font-weight: bold'
    );
  }
}

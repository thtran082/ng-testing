import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderComponent implements OnInit {

  constructor(public renderService: RenderService, ) { }

  ngOnInit(): void {
  }

  addRender() {
    this.renderService.addRender(this.constructor.name);
  }

  ngDoCheck() {
  this.renderService.addDoCheckRender(this.constructor.name);
    console.log(this.constructor.name, ': ngDoCheck');
  }
}

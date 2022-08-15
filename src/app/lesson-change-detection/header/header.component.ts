import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() value?: number;
  
  constructor(public renderService: RenderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  addRender() {
    this.renderService.addRender(this.constructor.name);
  }

  ngDoCheck() {
    console.log(this.constructor.name, ': ngDoCheck');
    this.renderService.addDoCheckRender(this.constructor.name);
  }
}

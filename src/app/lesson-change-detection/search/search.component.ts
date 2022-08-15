import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  value = 0;

  constructor(public renderService: RenderService, public cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.value = 10;
  }

  ngAfterViewInit(): void {
  }

  addRender() {
    this.renderService.addRender(this.constructor.name);
  }
  
  ngDoCheck() {
  this.renderService.addDoCheckRender(this.constructor.name);
    console.log(this.constructor.name, ': ngDoCheck');
  }

  onClick() {
    this.cdr.markForCheck();
  }
}

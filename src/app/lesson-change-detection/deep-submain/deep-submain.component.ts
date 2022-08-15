import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { RenderService } from "@ng-testing/services";

@Component({
  selector: 'app-deepsubmain',
  templateUrl: './deep-submain.component.html',
  styleUrls: ['./deep-submain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeepsubmainComponent implements OnInit {
  @Input() value?: string[]

  constructor(public renderService: RenderService, private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.cdr.detach();
  }
  
  addRender() {
    this.renderService.addRender(this.constructor.name);
  }

  ngDoCheck() {
  this.renderService.addDoCheckRender(this.constructor.name);
    console.log('%c' + this.constructor.name + ': ngDoCheck', 'background: orange');
  }

  ngAfterContentChecked() {
    // console.log('%c' + this.constructor.name + ': ngAfterContentChecked', 'background: orange');
  }

  ngAfterViewChecked() {
    // console.log('%c' + this.constructor.name + ': ngAfterViewChecked', 'background: orange');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(`%c` + this.constructor.name + ': ngOnChanges', 'background: orange');
    // if (changes['value'].previousValue !== changes['value'].currentValue) {
    //   this.cdr.reattach();
    // }
    // setTimeout(() => {
    //   this.cdr.detach();
    // }, 0);
  }
}

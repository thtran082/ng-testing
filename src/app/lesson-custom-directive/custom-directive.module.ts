import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomDirectiveRoutingModule } from "./custom-directive.routing";
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HideAfterDirective } from './directives/hide-after.directive';

@NgModule({
  declarations: [
    CustomDirectiveComponent,
    HideAfterDirective
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule
  ]
})
export class CustomDirectiveModule { }

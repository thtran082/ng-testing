import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ChangeDetectionComponent } from "./change-detection.component";
import { ChangeDetectionRoutingModule } from "./change-detection.routing";
import { DeepsubmainComponent } from './deep-submain/deep-submain.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AgreeComponent } from './search/agree/agree.component';
import { SearchComponent } from './search/search.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SubmainComponent } from './submain/submain.component';

const COMPONENTS = [
  DeepsubmainComponent,
  HeaderComponent,
  MainComponent,
  SearchComponent,
  SubheaderComponent,
  SubmainComponent,
  AgreeComponent,
  ChangeDetectionComponent,
];

@NgModule({
  imports: [ChangeDetectionRoutingModule, CommonModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [],
})
export class ChangeDetectionModule {}

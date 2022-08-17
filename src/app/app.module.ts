import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from "ngx-highlightjs";

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, HighlightModule,],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        fullLibraryLoader: () => import("highlight.js"),
        lineNumbersLoader: () => import("highlightjs-line-numbers.js"),
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

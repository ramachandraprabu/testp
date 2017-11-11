import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Progress} from './common/directive/progress.directive';
import {Bar} from './common/component/bar.component';
import {Progressbar} from './common/component/progressbar.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    Progress,
    Bar,
    Progressbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

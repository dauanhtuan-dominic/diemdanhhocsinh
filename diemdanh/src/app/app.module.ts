import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailComponent } from './pages/student/student-detail/student-detail.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { Theme2RoutingModule } from './@modular/template/theme2-routing.module';
import { Theme2Component } from './@modular/template/theme2/theme2.component';

@NgModule({
  declarations: [
    AppComponent,
    Theme2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Theme2RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

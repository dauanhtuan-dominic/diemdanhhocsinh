import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailComponent } from './pages/student/student-detail/student-detail.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { CoreModule } from './@web-core/core.module';
import { StudentService } from './@web-core/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

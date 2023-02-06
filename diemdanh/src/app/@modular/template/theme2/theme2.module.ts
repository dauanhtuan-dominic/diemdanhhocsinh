import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Theme2Component } from './theme2.component';
import { SidebarLeftComponent } from './layout/sidebar-left/sidebar-left.component';
import { NavTopComponent } from './layout/nav-top/nav-top.component';
import { Theme2Service } from './theme2.service';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';


@NgModule({
  declarations: [Theme2Component, SidebarLeftComponent, NavTopComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [Theme2Component],
  providers: [Theme2Service]
})
export class Theme2Module { }

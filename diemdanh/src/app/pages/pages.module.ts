import { NgModule } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule} from './pages-routing.module';
import {  Theme2Module  } from '../@modular/template/theme2/theme2.module';
import { ModalComponent } from './modal/modal.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { StudentService } from '../@web-core/http';
@NgModule({
     declarations: [PagesComponent, ModalComponent],
     imports: [
         CommonModule,
         PagesRoutingModule,
         Theme2Module,
         
     ],
     providers: [DatePipe, MdbModalService, StudentService]
 })
 export class PagesModule{}
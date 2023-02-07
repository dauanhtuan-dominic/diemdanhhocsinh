import { NgModule, ModuleWithProviders, InjectionToken, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './http/students';
import { API_URL } from './http/@http-config';
import { environment } from 'src/environments/environment.prod';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [],
    providers: [
        StudentService
        
    ]
  })
  
  export class CoreModule {}
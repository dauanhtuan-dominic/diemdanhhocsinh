import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StudentComponent} from './student.component';
import { StudentRoutingModule} from './student-routing.module';
import { StudentDetailComponent} from './student-detail/student-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperComponent, CropperSettings, ImageCropperModule } from 'ngx-img-cropper';
import { NgxCurrencyModule } from "ngx-currency";
import { StudentService } from 'src/app/@web-core/http';
import { CoreModule } from 'src/app/@web-core';

@NgModule({
    declarations: [StudentComponent, StudentDetailComponent],
    imports: [
      CommonModule,
      StudentRoutingModule,
      NgxDatatableModule,
      FormsModule,
      NgSelectModule,
      ImageCropperModule,
      // ModalModule.forRoot(),
      NgxCurrencyModule,
      CoreModule,
      FormsModule,
      ReactiveFormsModule
      
    ]
  })
  export class StudentModule { }
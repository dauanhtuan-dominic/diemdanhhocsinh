import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { GettimestudentDetailComponent } from './gettimestudent-detail/gettimestudent-detail.component';
import { GettimestudentComponent } from './gettimestudent.component';
import { GettimestudentRouting } from './gettimestudent-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperComponent, CropperSettings, ImageCropperModule } from 'ngx-img-cropper';
import { NgxCurrencyModule } from "ngx-currency";
import { StudentService } from 'src/app/@web-core/http';
import { CoreModule } from 'src/app/@web-core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner"; 


@NgModule({
  declarations: [
    GettimestudentDetailComponent, GettimestudentComponent
  ],
  imports: [
    CommonModule,
    GettimestudentRouting,
    NgxDatatableModule,
    FormsModule,
    NgSelectModule,
    ImageCropperModule,
    // ModalModule.forRoot(),z
    NgxCurrencyModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    DatePipe,
    NgxSpinnerModule
  ]
})
export class GettimestudentModule { }

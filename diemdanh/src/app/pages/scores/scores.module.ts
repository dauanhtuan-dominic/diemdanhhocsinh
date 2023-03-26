import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { ScoresComponent } from './scores.component';
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
  declarations: [ScoresComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    NgSelectModule,
    ImageCropperModule,
    NgxCurrencyModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    DatePipe,
    NgxSpinnerModule
  ]
})
export class ScoresModule { }

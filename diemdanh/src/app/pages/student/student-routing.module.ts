import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent} from './student-detail/student-detail.component';
import { StudentComponent} from './student.component';

const routes: Routes = [
  {
    path: '', 
    component: StudentComponent,
  },
  {
    path:'create',
    component: StudentDetailComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

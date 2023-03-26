import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GettimestudentDetailComponent} from './gettimestudent-detail/gettimestudent-detail.component';
import { GettimestudentComponent} from './gettimestudent.component';
import { StudentDetailComponent } from '../student/student-detail/student-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: GettimestudentComponent,
  },
  {
    path:'create',
    component: StudentDetailComponent
  },
  {
    path:'detail/:id',
    component: StudentDetailComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettimestudentRouting { }

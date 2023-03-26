import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScoresComponent} from './scores.component';

const routes: Routes = [
  {
    path: '', 
    component: ScoresComponent,
  },
//   {
//     path:'create',
//     component: StudentDetailComponent
//   },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScroreRoutingModule { }

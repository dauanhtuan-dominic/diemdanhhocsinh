import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'students',
        loadChildren: () => import('./student/student.module')
          .then(m => m.StudentModule),
      },
      {
        path: 'registers',
        loadChildren: () => import('./gettimestudent/gettimestudent.module')
          .then(m => m.GettimestudentModule),
      },
      {
        path: 'scores',
        loadChildren: () => import('./scores/scores-routing.module')
          .then(m => m.ScroreRoutingModule),
      },
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
})
export class PagesRoutingModule { }

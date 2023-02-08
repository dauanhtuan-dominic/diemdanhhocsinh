import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StudentService } from 'src/app/@web-core/http/students/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  implements OnInit{
  filterTerm!: string;
  tableData: any[];
  searchTerm = '';
  public index: number = 0;
  messages = {
    emptyMessage: 'No data to display'
  };
  constructor(
    private studentservice: StudentService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.studentservice.getListData().subscribe((data:any) =>{
      this.tableData = data.result;
    })
  }
  create(){
    console.log('vào');
    
    this.router.navigate(['pages/students/create']);
  }
  search(value: string): void {
    
  }
}

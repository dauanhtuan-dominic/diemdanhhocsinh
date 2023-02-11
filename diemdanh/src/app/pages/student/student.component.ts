import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StudentService } from 'src/app/@web-core/http/students/student.service';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent  implements OnInit{
  filterTerm!: string;
  tableData: any[];
  searchTerm = '';
  idStudent: any;
  public index: number = 0;
  messages = {
    emptyMessage: 'No data to display'
  };
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private studentservice: StudentService,
    private router: Router,
    private modalService: MdbModalService
  ){

  }
  ngOnInit(): void {
    this.getlistdatas();
  }
  getlistdatas(){
    this.studentservice.getListData().subscribe((data:any) =>{
      this.tableData = data.result;
      console.log('d',this.tableData);
      
    })
  }
  openModal(id:any) {
    // this.modalRef = this.modalService.open(ModalComponent,{
    //   data: { idStudent: id },
    //   modalClass: 'modal-dialog-top'
    // });
    // this.studentservice.delete(id).subscribe((data:any)=>{
    //   this.getlistdatas();
    // })
    
  }
  delete(id:any){
    this.studentservice.delete(id).subscribe((data)=>{
      this.getlistdatas();
    })
  }
  create(){
    console.log('vào');
    
    this.router.navigate(['pages/students/create']);
  }
  search(value: string): void {
    
  }

}

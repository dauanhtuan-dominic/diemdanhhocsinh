import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/@web-core/http/students/student.service';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-gettimestudent',
  templateUrl: './gettimestudent.component.html',
  styleUrls: ['./gettimestudent.component.scss']
})
export class GettimestudentComponent implements OnInit{
  filterTerm!: string;
  tableData: any[];
  searchTerm = '';
  idStudent: any;
  dataUser:any[] = [];
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
    this.studentservice.gettime().subscribe((data:any) =>{
      this.studentservice.getListData().subscribe((datauser:any)=>{
        data.result.forEach((elementuser:any)=>{
          datauser.result.forEach((element:any) => {
              if(elementuser.iduser == element.id){
                this.dataUser.push(element);
              }            
          });
        })
 
      })
      console.log('data get time',this.dataUser);
      
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
  getbyid(id:any){
    this.router.navigate(['pages/students/detail/' + id]);
  }
  create(){
    this.router.navigate(['pages/students/create']);
  }
  search(value: string): void {
    
  }
}

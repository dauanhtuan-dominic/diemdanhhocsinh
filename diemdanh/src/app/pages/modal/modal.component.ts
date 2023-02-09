import { Component,OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { StudentService } from 'src/app/@web-core/http';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  implements OnInit {
  idStudent: any | null = null;
  studentId: string;
  tableData: any | null = null;
  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private studentservice: StudentService,

    ){

  }
  ngOnInit(): void {
    
  }

  delete(){
    console.log('id',this.idStudent);
    this.studentservice.delete(this.idStudent).subscribe((data:any)=>{
        this.modalRef.close();
    })
    
  }
}

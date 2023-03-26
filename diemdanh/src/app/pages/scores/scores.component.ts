import { Component,OnInit } from '@angular/core';
import { StudentService } from 'src/app/@web-core/http/students/student.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  tableData: any[];
  constructor(
    private studentservice: StudentService,
  ){}
  ngOnInit(): void {
    this.getlistdatas();
  }
  getlistdatas(){
    this.studentservice.getListData().subscribe((data:any) =>{
      this.tableData = data.result;
      console.log('d',this.tableData);
      
    })
  }
}

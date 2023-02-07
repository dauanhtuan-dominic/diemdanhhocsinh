import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/@web-core/http';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  public form: FormGroup;
  public id: any;
  fileimage: FormData;
  imgAvatar: any;
  Classes = [
    {id: 1, name: "TBN"},
    {id: 2, name: "XT1"},
    {id: 3, name: "XT2"},
    {id: 4, name: "TS1"},
    {id: 5, name: "TS2"},
    {id: 6, name: "TS3"}, 
    {id: 7, name: "KT1"},
    {id: 8, name: "KT2"},
    {id: 9, name: "KT3"},
    {id: 10, name: "VĐ1"},
    {id: 11, name: "VĐ2"},
  ]
  groupgod = [
    {id: 1, name: "Giáo xóm 1"},
    {id: 2, name: "Giáo xóm 2"},
    {id: 3, name: "Giáo xóm 3"},
    {id: 4, name: "Giáo xóm 4"},
    {id: 5, name: "Giáo xóm 5"},
    {id: 6, name: "Giáo xóm 6"},
    {id: 7, name: "Giáo xóm 7"},
  ]
  constructor(
    private fb: FormBuilder,
    private studentservice: StudentService,
    private config: NgSelectConfig,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.config.notFoundText = 'Không có dữ liệu';
  }
  ngOnInit(): void {
        this.addForm();
  }
  addForm() {
    this.form = this.fb.group({
      image: [''],
      namegod: [''],
      fullname: [''],
      Classes: [''],
      groupgod: [''],
      birthday: [''],
      parent: [''],
      address: ['']
    });
  }
  get f(){
    return this.form.controls;
  }
  uploadFile(event:any){
    const file = ((event.target as HTMLInputElement).files as FileList)[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) =>{
      this.imgAvatar = reader.result;
    }
    this.form.patchValue({
      image: file,
    });
 
    this.form.get('image')?.updateValueAndValidity();
  }
  createItem() {
    var formData: any = new FormData();
    formData.append('image', this.form.get('image')?.value);  
    formData.append('namegod', this.form.get('namegod')?.value);  
    formData.append('fullname', this.form.get('fullname')?.value);  
    formData.append('class', this.form.get('Classes')?.value);  
    formData.append('groupgod', this.form.get('groupgod')?.value);  
    formData.append('birthday', this.form.get('birthday')?.value);  
    formData.append('parent', this.form.get('parent')?.value);  
    formData.append('address', this.form.get('address')?.value);  
    this.studentservice.create(formData).subscribe(data=>{
      if(data.success == false){
        console.log(' thêm thất bại');
      }else{
        this.router.navigate(['pages/students']);
        console.log('thêm thành công');
      }
    })
  }
  cancel() {
    this.router.navigate(['pages/students']);
  }
}

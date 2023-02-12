import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/@web-core/http';
import { DatePipe } from '@angular/common';
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
  catholicmans = [
    {id: 1, name: "Alphongsô"},
    {id: 2, name: "Anrê"},
    {id: 3, name: "Antôn"},
    {id: 4, name: "Augustinô"},
    {id: 5, name: "Basilio"},
    {id: 6, name: "Ba-tô-lô-mê-ô"},
    {id: 7, name: "Claret"},
    {id: 8, name: "Daminh Savio"},
    {id: 9, name: "Ða-Minh"},
    {id: 10, name: "Emmanuel"},
    {id: 11, name: "Giacôbê"},
    {id: 12, name: "Giêrađô"},
    {id: 13, name: "Gioakim"},
    {id: 14, name: "Gioan"},
    {id: 15, name: "Gioan Baotixita"},
    {id: 16, name: "Giuse"},
    {id: 17, name: "Gregorio"},
    {id: 18, name: "Henricô"},
    {id: 19, name: "Inhaxio"},
    {id: 21, name: "Lôrensô"},
    {id: 22, name: "Luca"},
    {id: 23, name: "Matthêu"},
    {id: 24, name: "Martinô"},
    {id: 25, name: "Micae"},
    {id: 26, name: "Nicôla"},
    {id: 27, name: "Phanxicô"},
    {id: 28, name: "Phanxicô Xaviê"},
    {id: 29, name: "Phaolô"},
    {id: 30, name: "Phêrô"},
    {id: 31, name: "Philipphê"},
    {id: 32, name: "Simon"},
    {id: 33, name: "Stêphanô"},
    {id: 34, name: "Tephano"},
    {id: 35, name: "Tôma"},
    {id: 36, name: "Vincentê"},
    {id: 37, name: "Vinh sơn"},
  ]
  catholicwoman = [
    {id: 1, name: "Agata"},
    {id: 2, name: "Anatasia"},
    {id: 3, name: "Anê"},
    {id: 4, name: "Anna"},
    {id: 5, name: "Catarina"},
    {id: 6, name: "Cecilia"},
    {id: 7, name: "Clara"},
    {id: 8, name: "Inê"},
    {id: 9, name: "Isave"},
    {id: 10, name: "Katarina"},
    {id: 11, name: "Mácta"},
    {id: 12, name: "Maria"},
    {id: 13, name: "Maria Madalena"},
    {id: 14, name: "Maria Goretti"},
    {id: 15, name: "Mary"},
    {id: 16, name: "Lucia"},
    {id: 17, name: "Rosa"},
    {id: 18, name: "Têrêsa"},
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
      godfather: [''],
      fathername: [''],
      godmother: [''],
      mothername: [''],
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
    formData.append('godfather', this.form.get('godfather')?.value);  
    formData.append('fathername', this.form.get('fathername')?.value);  
    formData.append('godmother', this.form.get('godmother')?.value);  
    formData.append('mothername', this.form.get('mothername')?.value);  
    formData.append('address', this.form.get('address')?.value);  
    console.log('form',formData);
    
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

import { Component, OnInit } from '@angular/core';
import { Theme2Service } from '../../theme2.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {
   status = 'extend-sidebar';
  titlePage = '';
  constructor(
    private theme2Service: Theme2Service,
  ) { }

  ngOnInit(): void {
    this.theme2Service.titleMenuCurrent.subscribe((data: any) => {
      this.titlePage = data;
    })
    // this.theme2Service.statusSidebar.subscribe((data: string) => {
    //   this.calcNavTop(data);
    // })
  }

  public animationSidebar(status:any) {
    this.status = status;
    this.theme2Service.setStatusSidebar(status)
  }

  // logout() {
  //   this.authService.logout();
  // }

  // calcNavTop(status:any) { 
  //   if(status === 'less-sidebar') {
  //     document.getElementById("navTop").style.width = "calc(100% - 100px)";
  //   } else {
  //     document.getElementById("navTop").style.width = "calc(100% - 270px)";
  //   }
  // }

}

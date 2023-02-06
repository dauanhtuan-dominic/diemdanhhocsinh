import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Theme2Service } from './theme2.service';

@Component({
  selector: 'app-theme2',
  templateUrl: './theme2.component.html',
  styleUrls: ['./theme2.component.scss']
})
export class Theme2Component implements OnInit {
  @ViewChild("mySidenav")
  public mySidenav: ElementRef;

  @Input()
  public arrMenuSide: any[];

  constructor(
    private theme2Service: Theme2Service
  ) { }

  ngOnInit(): void {
    this.theme2Service.statusSidebar.subscribe((data: string) => {
      this.actionSidebar(data);
    })
  }


  actionSidebar(status:any) { 
    // if(status === 'less-sidebar') {
    //   document.getElementById("main").style.width = "calc(100% - 100px)";
    //   document.getElementById("main").style.marginLeft = "100px";
      
    //   document.querySelectorAll<HTMLElement>('.ground-menu-item').forEach(element => {
    //     element.style.justifyContent="center"
    //   });
    // } else {
    //   document.getElementById("main").style.width = "calc(100% - 270px)";
    //   document.getElementById("main").style.marginLeft = "270px";
    //   document.querySelectorAll<HTMLElement>('.ground-menu-item').forEach(element => {
    //     element.style.justifyContent="left"
    //   });
    // }
  }

}

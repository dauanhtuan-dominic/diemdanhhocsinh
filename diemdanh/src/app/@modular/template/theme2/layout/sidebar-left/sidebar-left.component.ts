import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEM } from '../../../../../pages/menu';
import { Theme2Service } from '../../theme2.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;
  public menuItem = MENU_ITEM;
  public statusSidebar = "";
  private historyActive = -1;
  public heightSidebar = '100px';
  constructor(
    private theme1Service: Theme2Service,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.theme1Service.statusSidebar.subscribe((data: string) => {
      this.statusSidebar = data;
      this.actionSidebar(data);
    })
  }
  ngAfterViewInit() {
}

routerLink(index:any, item:any) {
  // if(this.menuItem[index]['active'] == true)
  // {
  //   return;
  // }
  // this.menuItem[index]['active'] = true;
  // if(this.historyActive === -1) {
  //   this.historyActive = index;
  // } else {
  //   this.menuItem[this.historyActive]['active'] = false;
  //   this.historyActive = index;
  // }
  this.router.navigate(['/pages/', item.path]);
  
  this.theme1Service.setTitleMenuCurrent(item.title);
}

  actionSidebar(status:any) {
    if(status === 'less-sidebar') {
      // document.getElementById("sidebar").style.width = '100px';
    } else {
      // document.getElementById("sidebar").style.width = '270px';
    }
  }
  ngOnDestroy() {
    if(this.historyActive == -1)
    return;
    // this.menuItem[this.historyActive]['active'] = false;
  }

}

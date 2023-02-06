import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Theme2Service {

  private sidebarSub: BehaviorSubject<string> = new BehaviorSubject<string>('extend-sidebar');

  private arrMenuSideSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  private titleMenuCurrentSub: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() { }

  public get statusSidebar(): Observable<string> {
    return this.sidebarSub.asObservable();
  }

  public setStatusSidebar(value: string) {
    this.sidebarSub.next(value);
  }

  public get arrMenuSide(): Observable<any[]> {
    return this.arrMenuSideSub.asObservable();
  }

  public setArrMenuSide(value: any[]) {
    this.arrMenuSideSub.next(value);
  }

  public get titleMenuCurrent(): Observable<string> {
    return this.titleMenuCurrentSub.asObservable();
  }

  public setTitleMenuCurrent(value: string) {
    this.titleMenuCurrentSub.next(value);
  }
}

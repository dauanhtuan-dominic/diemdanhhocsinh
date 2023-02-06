import { Component, OnInit } from '@angular/core';
import { MENU_ITEM } from './menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  public MENU = MENU_ITEM;
  constructor() { }

  ngOnInit(): void {
  }

}
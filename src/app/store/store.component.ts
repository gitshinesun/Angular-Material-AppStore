import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],

})
export class StoreComponent implements OnInit {

  icons = ['face', 'face', 'face', 'accessibility'];
  // cnames = ['category1', 'category2', 'category3', 'category4'];
  constructor() { }

  ngOnInit() {
  }

}

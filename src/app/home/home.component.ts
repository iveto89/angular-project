import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {products} from './products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isGridVisible = false;

  gridData: any[] = products;


  constructor() { }

  ngOnInit() {
  }

  toggleGrid() {
      this.isGridVisible = !this.isGridVisible;
  }

}

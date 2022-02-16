import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { GalleryFacade } from '@mf-app/shared/data-store';

@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.gall.init();
  }
  title = 'shell';

  constructor(private gall:GalleryFacade) {

  }



}

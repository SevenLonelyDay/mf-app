import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { GalleryFacade } from '@mf-app/shared/data-store';
import { map } from 'rxjs';

@Component({
  selector: 'mf-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  // cats = this.galleryFacade.selectedCats$.pipe(
    // map((selectedCats: any) => Array.from(selectedCats.values()))) as any;
  cats = this.galleryFacade.selectedCats$.pipe(
    map((selectedCats:any)=>Array.from(selectedCats.values()))
  ) as any;

  constructor(private galleryFacade: GalleryFacade) {}

  ngOnInit(): void {
    console.log();
    // this.cats((data:any)=>{
    //   console.log(data);
    // })
  }

}

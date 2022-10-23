import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent implements OnInit {
  @Input() title = '';
  @Input() poster_path = '';
  @Input() id = '';
  linkImg = 'https://image.tmdb.org/t/p/w500';

  constructor() { }

  ngOnInit(): void {
  }
  watchNow() {

  }

}

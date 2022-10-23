import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() title = '';
  @Input() vote_average = '';
  @Input() release_date = '';
  @Input() poster_path = '';
  @Input() id = '';

  constructor() { }

  ngOnInit(): void {
  }
  watchNow() {

  }

}

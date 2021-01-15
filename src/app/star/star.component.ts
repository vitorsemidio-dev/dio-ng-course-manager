import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;

  starWidth: number;

  constructor() {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * 94) / 5;
  }
}

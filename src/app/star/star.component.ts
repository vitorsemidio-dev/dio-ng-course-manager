import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;

  private readonly maxNumberOfStar: number = 5;
  private readonly baseWidthIcon: number = 74;

  starWidth: number;

  constructor() {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * this.baseWidthIcon) / this.maxNumberOfStar;
  }
}

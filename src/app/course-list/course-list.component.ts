import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  constructor() {}

  courses: Course[] = [];

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '/assets/images/animations.png',
        price: 100.0,
        code: 'Ang-Form',
        duration: 120,
        rating: 4.5,
        releaseDate: 'December, 22, 2020',
      },
      {
        id: 2,
        name: 'Angular Http',
        imageUrl: '/assets/images/http.png',
        price: 50.4,
        code: 'Ang-Http',
        duration: 80,
        rating: 3.8,
        releaseDate: 'November, 22, 2020',
      },
    ];
  }
}

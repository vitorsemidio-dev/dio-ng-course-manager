import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  _filterBy: string = '';

  set filter(value: string) {
    this._filterBy = value.trim().toLowerCase();

    this.filteredCourses = this._courses.filter(
      (course) => course.name.toLowerCase().indexOf(this._filterBy) > -1,
    );
  }

  get filter() {
    return this._filterBy;
  }

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.retrieveAll();
  }

  retrieveAll() {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteById(id: number) {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

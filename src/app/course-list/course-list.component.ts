import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value.trim().toLowerCase();

    this.filteredCourses = this._courses.filter(
      (course) => course.name.toLowerCase().indexOf(this._filterBy) > -1,
    );
  }

  get filter() {
    return this._filterBy;
  }
}

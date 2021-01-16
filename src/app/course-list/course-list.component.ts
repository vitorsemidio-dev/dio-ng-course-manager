import { Component, OnInit } from '@angular/core';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  courses: Course[] = [];

  ngOnInit() {
    this.courses = this.courseService.retrieveAll();
  }
}

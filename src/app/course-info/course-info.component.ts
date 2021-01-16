import { CourseService } from './../course-list/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course-list/course';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
    const courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.retrieveById(courseId);
  }

  retrieveById(id: number) {
    this.courseService.retrieveById(id).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  save() {
    this.courseService.save(this.course);
  }
}

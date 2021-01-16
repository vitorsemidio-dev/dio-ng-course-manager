import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';

import { CourseRoutingModule } from './course-routing.module';

import { PipeModule } from './../shared/pipe/pipe.module';
import { StarModule } from './../shared/components/star/star.module';

@NgModule({
  declarations: [CourseInfoComponent, CourseListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipeModule,
    CourseRoutingModule,
  ],
})
export class CourseModule {}

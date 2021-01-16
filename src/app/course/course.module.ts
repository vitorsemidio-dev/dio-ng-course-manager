import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReplacePipe } from './../pipe/replace.pipe';
import { StarComponent } from './../star/star.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';

import { CourseRoutingModule } from './course-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CourseInfoComponent,
    CourseListComponent,

    StarComponent,
    ReplacePipe,
  ],
  imports: [CommonModule, FormsModule, CourseRoutingModule],
})
export class CourseModule {}

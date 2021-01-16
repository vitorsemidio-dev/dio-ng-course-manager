import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent,
  },

  {
    path: 'courses/info/:id',
    component: CourseInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}

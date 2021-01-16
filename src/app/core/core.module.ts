import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavBarComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]),
  ],
  exports: [NavBarComponent],
})
export class CoreModule {}

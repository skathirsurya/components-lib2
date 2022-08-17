import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavListComponent
  ],
  exports: [
    NavListComponent
  ],
})
export class NavListModule {}

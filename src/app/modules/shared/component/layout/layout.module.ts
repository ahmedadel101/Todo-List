import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UsersLayoutComponent } from './users-layout/users-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';


@NgModule({
  declarations: [AdminLayoutComponent, UsersLayoutComponent, AuthLayoutComponent, BlankLayoutComponent],
  imports: [
    CommonModule,
    RouterModule

  ]
})
export class LayoutModule { }

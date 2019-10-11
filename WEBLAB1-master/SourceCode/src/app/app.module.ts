import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookLoginComponent } from './book-login/book-login.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookLandingPageComponent } from './book-landing/book-landing-page.component';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { BookLandingContentComponent } from './book-landing-content/book-landing-content.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'course/:id',
    component: CourseComponent,
    data: { title: 'Course Details' }
  },
  {
    path: 'course-edit/:id',
    component: CourseEditComponent,
    data: { title: 'Edit Course' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login Book' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent
  },
  { path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookEditComponent,
    BookLoginComponent,
    BookLandingPageComponent,
    BookLandingContentComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    CourseComponent,
    CourseEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

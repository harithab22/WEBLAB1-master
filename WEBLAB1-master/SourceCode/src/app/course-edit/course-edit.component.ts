import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  bookForm: FormGroup;


  fName: string = '';
  lName: string = '';
  uName: string = '';
  mobilePhone: string = '';
  class1: string = '';
  class2: string = '';
  class3: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.bookForm = this.formBuilder.group({
      'fName': '',
      'lName': '',
      'uName': '',
      'mobilePhone': '',
      'class1': '',
      'class2': '',
      'class3': '',
    });
    /* This function gets the students details from database
 */
    this.api.getBook(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.bookForm = this.formBuilder.group({
          'fName': data[0].fName,
          'lName': data[0].lName,
          'uName': data[0].uName,
          'mobilePhone': data[0].mobilePhone,
          'class1': data[0].class1,
          'class2': data[0].class2,
          'class3': data[0].class3,
        });
      });
  }
  /* This function updates the student details
   */
  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.route.snapshot.params['id'], form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/course', id]);
      }, (err) => {
        console.log(err);
      });
    this.router.navigate(['/dashboard']);
  }
}

import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  fName: String = '';
  lName: String = '';
  uName: String = '';
  pass: String = '';
  confirmPass: String = '';
  mobilePhone: String = '';
  security: String = '';
  answer: String = '';
  class1: String = '';
  class2: String = '';
  class3: String = '';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'fName': [null, Validators.required],
      'lName': [null, Validators.required],
      'uName': [null, Validators.required],
      'pass': [null, Validators.required],
      'confirmPass': [null, Validators.required],
      'mobilePhone': [null, Validators.required],
      'class1': [null, Validators.required],
      'class2': [null, Validators.required],
      'class3': [null, Validators.required],
      'security': [null, Validators.required],
      'answer': [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.api.postBook(form)
      .subscribe(res => {
        this.router.navigate(['/book-login']);
      }, (err) => {
        console.log(err);
      });
  }
}

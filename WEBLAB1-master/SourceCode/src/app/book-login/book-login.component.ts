import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-book-login',
  templateUrl: './book-login.component.html',
  styleUrls: ['./book-login.component.css']
})
export class BookLoginComponent implements OnInit {

  bookForm: FormGroup;
  myusername: String = '';
  mypassword: String = '';
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'myusername': [null, Validators.required],
      'mypassword': [null, Validators.required]
    });
  }
  /* This function on submitting the username and Password details, checks if it matches with the ones in database
  and if matches navigates to home page
   */
  onFormSubmit(form: NgForm) {
    this.api.getBook(form['myusername'])
      .subscribe(data => {
        if (data[0]['pass'] === form['mypassword']) {
          this.router.navigate(['/book-landing', form['myusername']]);
        }
      });
  }
}

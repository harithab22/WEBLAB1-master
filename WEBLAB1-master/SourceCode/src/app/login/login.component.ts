import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
          this.router.navigate(['/dashboard', form['myusername']]);
        }
      });
  }
}

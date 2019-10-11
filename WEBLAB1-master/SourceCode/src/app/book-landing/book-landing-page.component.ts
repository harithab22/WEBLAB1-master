import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';


@Component({
  selector: 'app-book-landing-page',
  templateUrl: './book-landing-page.component.html',
  styleUrls: ['./book-landing-page.component.css']
})
export class BookLandingPageComponent implements OnInit {
  book = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id) {
    console.log(id);
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
  Logout()
  {
    this.router.navigate(['/book-login']);
  }
  ViewProfile()
  {
    this.router.navigate(['/book-details', this.book[0].uName]);
  }
}

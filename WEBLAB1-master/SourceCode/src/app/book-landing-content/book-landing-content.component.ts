import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-book-landing-content',
  templateUrl: './book-landing-content.component.html',
  styleUrls: ['./book-landing-content.component.css']
})
export class BookLandingContentComponent implements OnInit {
  book = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }
  /* This function fetches the details of the user from the database
   */
  getBookDetails(id) {
    console.log(id);
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
}

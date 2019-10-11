import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }
  /* This function fetches all the details of the student from the database
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

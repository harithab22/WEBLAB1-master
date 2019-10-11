import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    this.router.navigate(['/login']);
  }
  ViewProfile()
  {
    this.router.navigate(['/course', this.book[0].uName]);
  }
}

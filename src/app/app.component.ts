import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Cookies';
  getKey = '';
  getValue = '';
  cookieValue = '';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.cookieService.set('Test', 'Hello World!');
    this.cookieValue = this.cookieService.get('Test');
  }

  getTheValue(): void {
    this.cookieValue = this.cookieService.get(this.getValue);
  }



  showValue(): void {
    this.cookieValue
  }

}

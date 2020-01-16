import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  expireNumber: number = undefined;
  getKey: string = '';
  getValue: string = '';
  setKey: string = '';
  setValue: string = '';
  show: boolean = false;
  title = 'Angular-Cookies';

  constructor(private cookieService: CookieService) {
  }

  createCustomCookie(key: string, value: string, expires?: number): void {
    this.cookieService.set(key, value, expires);
  }

  ngOnInit(): void {
    this.cookieService.set('Test', 'Hello World!', 10000, undefined, undefined, undefined, 'Strict');
  }

  getTheValue(key: string): void {
    this.getValue = this.cookieService.get(key);
    this.showValue();
  }

  setTheValue(key: string, value: string, expires?: number): void {
    this.cookieService.set(key, value, expires, undefined, undefined, undefined, 'Strict');
    this.setKey = '';
    this.setValue = '';
    this.expireNumber = undefined;
  }

  showValue(): void {
    this.show = true;
  }

}

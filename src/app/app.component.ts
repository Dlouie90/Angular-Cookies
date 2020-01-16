import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  expireNumber: number = undefined;
  getName: string = '';
  getValue: string = '';
  setName: string = '';
  setValue: string = '';
  show: boolean = false;
  title = 'Angular-Cookies';

  constructor(private cookieService: CookieService) {
  }

  createCustomCookie(name: string, value: string, expires?: number): void {
    this.cookieService.set(name, value, expires);
  }

  deleteCookie(name: string) {
    this.cookieService.delete(name);

  }

  ngOnInit(): void {
    this.cookieService.set('Test', 'Hello World!', 10000, undefined, undefined, undefined, 'Strict');
  }

  getTheValue(name: string): void {
    this.getValue = this.cookieService.get(name);
    this.getName = '';
    this.showValue();
  }

  setTheValue(name: string, value: string, expires?: number): void {
    this.cookieService.set(name, value, expires, undefined, undefined, undefined, 'Strict');
    this.setName = '';
    this.setValue = '';
    this.expireNumber = undefined;
  }

  showValue(): void {
    this.show = true;
  }

}

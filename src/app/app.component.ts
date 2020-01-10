import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cookieValue: string = '';
  getKey: string = '';
  getValue: string = '';
  setKey: string = '';
  setValue: string = '';
  show: boolean = false;
  title = 'Angular-Cookies';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.cookieService.set('Test', 'Hello World!');
    this.cookieValue = this.cookieService.get('Test');
  }

  getTheValue(key: string): void {
    this.getValue = this.cookieService.get(key);
    this.showValue();
  }

  setTheValue(key: string, value: string): void {
    this.cookieService.set(key, value);
  }

  showValue(): void {
    this.show = true;
  }

}

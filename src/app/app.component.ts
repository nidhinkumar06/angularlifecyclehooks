import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  title = 'angularlifecycle';
  hooks: string[] = [];
  textBox;
  currentTime = moment().format('YYYY-MM-DD, hh:mm:ss.SSS');
  constructor() {
    this.hooks.push(`constructor got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngOnInit() {
    this.hooks.push(`onInit got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngOnChanges() {
    this.hooks.push(`ngOnChanges got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngDoCheck() {
    this.hooks.push(`ngDoCheck got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngAfterContentInit() {
    this.hooks.push(`ngAfterContent Init got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngAfterContentChecked() {
    this.hooks.push(`ngAfterContentChecked got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngAfterViewInit() {
    this.hooks.push(`ngAfterViewInit got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngAfterViewChecked() {
    this.hooks.push(`ngAfterViewChecked got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }

  ngOnDestroy() {
    this.hooks.push(`ngOnDestroy got called ${moment().format('YYYY-MM-DD, hh:mm:ss.SSS')}`);
  }
}

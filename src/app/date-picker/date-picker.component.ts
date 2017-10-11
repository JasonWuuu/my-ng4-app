import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input('date') date: Date;

  @Output('chooseDate') chooseDate: EventEmitter<Date> = new EventEmitter<Date>();

  year = 0;
  month = 0;
  day = 0;

  constructor() {
    console.log('constructor', this.year);
    console.log('constructor DATE', this.date);
  }

  ngOnInit() {
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
    console.log('ngOnInit', this.year);
  }

  choose() {
    const currentDate = new Date(this.year, this.month, this.day);
    this.chooseDate.emit(currentDate);
  }

}

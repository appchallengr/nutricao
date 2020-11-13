import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  objectKeys = Object.keys;
  numSlots: number = 2;
  days:any = [];
  daysDefault:any = [
    {hour: "00:00", selected: false},{hour: "01:00", selected: false},{hour: "02:00", selected: false},{hour: "03:00", selected: false},{hour: "04:00", selected: false},
    {hour: "05:00", selected: false},{hour: "06:00", selected: false},{hour: "07:00", selected: false},{hour: "08:00", selected: false},{hour: "09:00", selected: false},
    {hour: "10:00", selected: false},{hour: "11:00", selected: false},{hour: "12:00", selected: false},{hour: "13:00", selected: false},{hour: "14:00", selected: false},
    {hour: "15:00", selected: false},{hour: "16:00", selected: false},{hour: "17:00", selected: false},{hour: "18:00", selected: false},{hour: "19:00", selected: false},
    {hour: "20:00", selected: false},{hour: "21:00", selected: false},{hour: "22:00", selected: false},{hour: "23:00", selected: false}
  ]

  @Input() type:string;

  constructor() { }

  ngOnInit() {
    if(this.type == 'days'){
      this.getSlots();
    }else{

    }
  }

  getDefault(){

  }
  

  getSlots(){

    var nowPlusOneDay = moment().add('days', this.numSlots);
    var format = nowPlusOneDay.format('YYYY-MM-DD');

    var a = moment(format + ' 23:59:59');
    var b = moment();

    var slots = a.diff(b, 'hours');
    var initValue = "";
    var firstRow:boolean = true;
    for(let i=0;i<=slots;i++){

      var formatDate = moment().add('hours', i);
      var dayFormat = formatDate.format('DD/MM/YYYY');
      var hourFormat = formatDate.format('HH');

      if(dayFormat != initValue){
        this.days[dayFormat] = Array();
        if(!firstRow){
          //console.log("Mudou");
        }else{
          //this.days[dayFormat] = Array();
        }
        initValue = dayFormat;
      }

      let obj = {hour: hourFormat + ":00", selected: false};
      this.days[dayFormat].push(obj);
      //console.log(dayFormat + " - " + hourFormat);
      firstRow = false;
    }

    console.log("days",this.days);
  }

  select(k,h){
    console.log(this.days);
    this.days[k].map((v)=>{
      console.log(v.hour,h);
      if(v.hour == h){
        console.log("aqui");
        if(v.selected){
          v.selected = false
        }else{
          v.selected = true;
        }
      }
    })
    console.log(this.days);
  }

  selectDefault(h){
    console.log(this.daysDefault);
    this.daysDefault.map((v)=>{
      console.log(v.hour,h);
      if(v.hour == h){
        console.log("aqui");
        if(v.selected){
          v.selected = false
        }else{
          v.selected = true;
        }
      }
    })
    console.log(this.daysDefault);
  }

  drop(e){
    console.log(e);
  }

}
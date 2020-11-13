import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-msg-default',
  templateUrl: './error-msg-default.component.html',
  styleUrls: ['./error-msg-default.component.css']
})
export class ErrorMsgDefaultComponent implements OnInit {

  @Input() errorMessage:string;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  dismiss(){
    this.close.emit({value: true});
  }

}

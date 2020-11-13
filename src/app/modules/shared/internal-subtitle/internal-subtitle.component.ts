import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-internal-subtitle',
  templateUrl: './internal-subtitle.component.html',
  styleUrls: ['./internal-subtitle.component.css']
})
export class InternalSubtitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}

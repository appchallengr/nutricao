import { Component, OnInit } from '@angular/core';
import { PoliciesService } from 'src/app/core/services/policies.service';

@Component({
  selector: 'app-view-btn',
  templateUrl: './view-btn.component.html',
  styleUrls: ['./view-btn.component.css']
})
export class ViewBtnComponent implements OnInit {

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
  }

}

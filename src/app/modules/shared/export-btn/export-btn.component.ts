import { Component, OnInit } from '@angular/core';
import { PoliciesService } from 'src/app/core/services/policies.service';

@Component({
  selector: 'app-export-btn',
  templateUrl: './export-btn.component.html',
  styleUrls: ['./export-btn.component.css']
})
export class ExportBtnComponent implements OnInit {

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
  }

}

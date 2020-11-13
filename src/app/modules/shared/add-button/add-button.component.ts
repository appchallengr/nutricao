import { Component, OnInit } from '@angular/core';
import { PoliciesService } from 'src/app/core/services/policies.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PoliciesService } from 'src/app/core/services/policies.service';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent implements OnInit {

  @Input() disabled:boolean;

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
  }

}

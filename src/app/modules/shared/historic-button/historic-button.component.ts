import { Component, OnInit } from '@angular/core';
import { PoliciesService } from 'src/app/core/services/policies.service';

@Component({
  selector: 'app-historic-button',
  templateUrl: './historic-button.component.html',
  styleUrls: ['./historic-button.component.css']
})
export class HistoricButtonComponent implements OnInit {

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
  }

}

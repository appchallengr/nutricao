import { Component, OnInit, Input } from '@angular/core';
import { PoliciesService } from 'src/app/core/services/policies.service';

@Component({
  selector: 'app-active-btn',
  templateUrl: './active-btn.component.html',
  styleUrls: ['./active-btn.component.css']
})
export class ActiveBtnComponent implements OnInit {

  @Input() activate:boolean;
  msg:string;

  constructor(public policiesService: PoliciesService) { }

  ngOnInit() {
    if(this.activate){
      this.msg = "Ativar";
    }else{
      this.msg = "Inativar"
    }
  }

}

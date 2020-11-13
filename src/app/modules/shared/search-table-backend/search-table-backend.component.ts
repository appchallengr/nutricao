import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject, Subscription, of } from 'rxjs';0
import { debounceTime, distinctUntilChanged, mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-search-table-backend',
  templateUrl: './search-table-backend.component.html',
  styleUrls: ['./search-table-backend.component.css']
})
export class SearchTableBackendComponent implements OnInit {

  public keyUp = new Subject<KeyboardEvent>();
  public filtro:String = "";

  private subscription: Subscription;

  @Output() filtroChanged = new EventEmitter();
  @Input() default:String;

  constructor() {

    

    this.subscription = this.keyUp.pipe(
      //map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(
        delay(100),
      )),
    ).subscribe((evento: any) => {
      let filtro = this.filtro;

      this.filtroChanged.emit(filtro);
    });
   }

  ngOnInit() {
    if(this.default){
      this.filtro = this.default;
    }
  }

  clearInput(){
    this.filtro = "";
    this.filtroChanged.emit(this.filtro);
  }

}

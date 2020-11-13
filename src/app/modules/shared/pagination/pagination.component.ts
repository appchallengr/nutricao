import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() totalRecords: number;
  @Input() firstRecordOnPage:number;
  @Input() lastRecordOnPage:number;
  @Output() changePageNumber = new EventEmitter();

  listNumbers:number[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
   this.getListNumbers()
  }

  ngOnChanges() {
    this.getListNumbers();
    this.cd.detectChanges();
  }

  getListNumbers(){
    let temp = Array(this.totalPages).fill(0).map((x,i)=>i);
    this.getPagin(temp);
  }

  getPagin(temp){
    if(this.currentPage >= 5){
      this.listNumbers = temp.slice(this.currentPage - 4, this.currentPage + 1);
    }else{
      this.listNumbers = temp.slice(0, 5);
    }
  }

  changePage(page){
    this.changePageNumber.emit(page);
  }

  getFirstRecord(){
    if(this.lastRecordOnPage == 0){
      return this.lastRecordOnPage
    }else{
      return this.firstRecordOnPage;
    }
  }

}

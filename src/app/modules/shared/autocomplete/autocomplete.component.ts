import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


interface Option {
  name: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})


export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  @Input() options: Option[];
  @Input() placeholder:string;
  @Input() info:string;

  filteredOptions: Observable<Option[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map((value) => {
          console.log("filter",value)
          return this._filter(value)
        })
      );
  }

  displayFn(user?: Option): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): Option[] {
    console.log('name',name);
    const filterValue = name.toLowerCase();
   
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}

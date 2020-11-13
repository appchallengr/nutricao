import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputTagComponent),
  multi: true
}


@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputTagComponent implements ControlValueAccessor {


  private innerValue: any = '';
  errorLength:boolean = false;
  errorMaxValue:boolean = false;
  errorMinValue:boolean = false;
  @Input() isReadOnly = false;
  @Input() required = false;
  @Input() uppercase:boolean;
  @Input() errors: any;
  @Input() label: string;
  @Input() mascara: string;
  @Input() placeholder: string;
  @Input() isString:boolean;
  @Input() type: string = 'password';
  @Input() numMaxlength: string;
  @Input() maxValue: number;
  @Input() minValue: number;
  @Input() disabled: boolean;
  @Input() onlyNumbers: boolean = false;
  @Output() changeValue = new EventEmitter();

  get value(): any {
    return this.innerValue;
  }

  onKeydown(event) {
    if (event.key === 'Delete') {
      this.value.splice(this.value.indexOf(event.value), 1);
    }
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onBlur() {
    this.onTouchedCb;
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: (_: any) => void = () => { };

  onChange(v) {
    this.changeValue.emit(v);
  }

  constructor() { }

  ngOnInit() {
  }

  transform(value: string): Observable<object> {
      const item = { display: value.toUpperCase(), value: value.toUpperCase() };
      return of(item);
  }

  onAdd($event: any){
    /*
    if(this.onlyNumbers && isNaN(parseInt($event.value))){
      this.value.splice(this.value.indexOf($event.value), 1)
    }*/
    

    if(this.isString){
      
    }else{
      if (!$event.value.match(/^[0-9]+$/)) {
        this.value.splice(this.value.indexOf($event.value), 1);
      }
    }

    if(this.numMaxlength){
      if($event.value.length > this.numMaxlength){
        this.value.splice(this.value.indexOf($event.value) + 1, 1);
      }
    }

    if(this.maxValue){
      if(parseInt($event.value) > this.maxValue){
        this.value.splice(this.value.indexOf($event.value), 1);
      }
    }

    if(this.minValue){
      if(parseInt($event.value) < this.minValue){
        if(parseInt($event.value) >= 0){
          this.value.splice(this.value.indexOf($event.value), 1);
        }
      }
    }
  }

  textChange(e){
    if(this.numMaxlength){
      if(e.length > this.numMaxlength){
        this.errorLength = true;
      }else{
        this.errorLength = false;
      }
    }

    if(this.maxValue){
      if(parseInt(e) > this.maxValue){
        this.errorMaxValue = true;
      }else{
        this.errorMaxValue = false;
      }
    }

    if(this.minValue){
      
      if(parseInt(e) < this.minValue){
        this.errorMinValue = true;
      }else{
        this.errorMinValue = false;
      }
    }
  }

  keyPress(e){
    if(e.key == 'Delete'){
      console.log(this.value);
      this.value.splice(-1,1)
    }
  }

}

import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ShowActiveComponent),
  multi: true
}

@Component({
  selector: 'app-show-active',
  templateUrl: './show-active.component.html',
  styleUrls: ['./show-active.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})

export class ShowActiveComponent implements ControlValueAccessor {
  
  private innerValue: any = '';
  @Input() isReadOnly = false;
  @Input() errors:any;
  @Input() label:string;
  @Input() placeholder:string;
  @Input() maxlength:string;
  @Input() disabled:boolean;
  @Input() title:string;
  @Output() changeValue = new EventEmitter();

  get value() {
    return this.innerValue;
  }

  set value(v: string) {    
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

}

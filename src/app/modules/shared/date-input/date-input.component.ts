import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDatepickerConfig, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { MomentDateFormatter } from './MomentDateFormatter'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { CustomAdapter } from './CustomAdapter';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateInputComponent),
  multi: true
}

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    { 
      provide: NgbDateParserFormatter, 
      useValue: new MomentDateFormatter() 
    }, 
    INPUT_FIELD_VALUE_ACCESSOR
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  private innerValue: any = '';
  @Input() isReadOnly = false;
  @Input() errors: any;
  @Input() label: string;
  @Input() mascara: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() maxlength: string;
  @Input() disabled: boolean;
  @Output() changeValue = new EventEmitter();

    /**
   * The minimum date that can be selected with the datepicker.
   */  
  @Input() minDate: NgbDateStruct;

  /**
   * The maximum date that can be selected with the datepicker.
   */
  @Input() maxDate: NgbDateStruct;

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

  constructor(ngbDatepickerConfig: NgbDatepickerConfig) {

    //this.minYear = ngbDatepickerConfig.minDate.year;

    // customize default values of datepickers used by this component tree
    //config.minDate = { year: 2015, month: 1, day: 1 };
    //config.maxDate = { year: 2050, month: 12, day: 31 };

    // days that don't belong to current month are not visible and the space should be collapsed
    //config.outsideDays = 'collapsed';

    // weekends are disabled
    // config.markDisabled = (date: NgbDateStruct) => {
    //   const d = new Date(date.year, date.month - 1, date.day);
    //   return d.getDay() === 0 || d.getDay() === 6;
    // };

  }

  ngOnInit() {
  }


}

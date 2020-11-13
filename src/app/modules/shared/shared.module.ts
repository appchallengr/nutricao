import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { BadgeComponent } from './badge/badge.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBtnComponent } from './search-btn/search-btn.component';
import { EditBtnComponent } from './edit-btn/edit-btn.component';
import { ActiveBtnComponent } from './active-btn/active-btn.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ViewBtnComponent } from './view-btn/view-btn.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { CleanBtnComponent } from './clean-btn/clean-btn.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ShowActiveComponent } from './show-active/show-active.component';
import { PaginationComponent } from './pagination/pagination.component';
import { InputTagComponent } from './input-tag/input-tag.component';
import { TagInputModule } from 'ngx-chips';
import { ErrorMsgDefaultComponent } from './error-msg-default/error-msg-default.component';
import { MatDialogModule, MatAutocompleteModule } from '@angular/material';
import { HistoricButtonComponent } from './historic-button/historic-button.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from 'src/app/core/services/loading.service';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { InputCodeSearchComponent } from './input-code-search/input-code-search.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ExportBtnComponent } from './export-btn/export-btn.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './pipe/search.pipe';
import { BlockBtnComponent } from './block-btn/block-btn.component';
import { DeleteBtnComponent } from './delete-btn/delete-btn.component';
import { InternalSubtitleComponent } from './internal-subtitle/internal-subtitle.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { DateInputComponent } from './date-input/date-input.component';
import { SearchTableBackendComponent } from './search-table-backend/search-table-backend.component';
import { LoadingMiniComponent } from './loading-mini/loading-mini.component';
import { AutofocusDirective } from 'src/app/core/directives/auto-focus.directive';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    TitleComponent,
    AddButtonComponent,
    BadgeComponent,
    SearchTableComponent,
    SearchBtnComponent,
    EditBtnComponent,
    SearchPipe,
    ActiveBtnComponent,
    ViewBtnComponent,
    CalendarComponent,
    InputTextComponent,
    InputCheckboxComponent,
    BackBtnComponent,
    CleanBtnComponent,
    SubmitBtnComponent,
    InputRadioComponent,
    ResultsPageComponent,
    ShowActiveComponent,
    PaginationComponent,
    InputTagComponent,
    ErrorMsgDefaultComponent,
    HistoricButtonComponent,
    LoadingComponent,
    SubtitleComponent,
    InternalSubtitleComponent,
    InputCodeSearchComponent,
    SearchButtonComponent,
    AutocompleteComponent,
    AvatarComponent,
    ExportBtnComponent,
    InputSelectComponent,
    BlockBtnComponent,
    DeleteBtnComponent,
    TextAreaComponent,
    InputNumberComponent,
    DateInputComponent,
    SearchTableBackendComponent,
    LoadingMiniComponent,
    AutofocusDirective,
    StatusComponent
  ],
  exports: [
    TitleComponent,
    AddButtonComponent,
    BadgeComponent,
    SearchTableComponent,
    FormsModule,
    SearchBtnComponent,
    EditBtnComponent,
    ActiveBtnComponent,
    ViewBtnComponent,
    CalendarComponent,
    InputTextComponent,
    InputCheckboxComponent,
    BackBtnComponent,
    CleanBtnComponent,
    SubmitBtnComponent,
    InputRadioComponent,
    ReactiveFormsModule,
    ResultsPageComponent,
    MatAutocompleteModule,
    ShowActiveComponent,
    PaginationComponent,
    InputTagComponent,
    ErrorMsgDefaultComponent,
    HistoricButtonComponent,
    LoadingComponent,
    SubtitleComponent,
    InputCodeSearchComponent,
    AutocompleteComponent,
    SearchButtonComponent,
    AvatarComponent,
    ExportBtnComponent,
    InputSelectComponent,
    BlockBtnComponent,
    DeleteBtnComponent,
    InternalSubtitleComponent,
    TextAreaComponent,
    NgbModule,
    InputNumberComponent,
    DateInputComponent,
    SearchTableBackendComponent,
    LoadingMiniComponent,
    StatusComponent
  ],
  imports: [
    TagInputModule,
    CommonModule,
    FormsModule,
    MatTooltipModule,
    DragDropModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    NgbModule
  ],
  providers: [
    LoadingService
  ],
  entryComponents: [
    LoadingComponent
  ]
})
export class SharedModule { }

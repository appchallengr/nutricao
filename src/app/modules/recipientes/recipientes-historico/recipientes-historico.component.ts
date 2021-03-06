import { Component, OnInit, Inject } from '@angular/core';
import { Column } from 'src/app/core/models/Column';
import { Body } from 'src/app/core/models/Body';
import { Historico } from 'src/app/core/models/Historico';
import { RecipientesService } from 'src/app/core/services/recipientes.service';
import { ExcelService } from 'src/app/core/services/excel.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-recipientes-historico',
  templateUrl: './recipientes-historico.component.html',
  styleUrls: ['./recipientes-historico.component.css']
})
export class RecipientesHistoricoComponent implements OnInit {

  columns: Column[];
  body: Body;
  loading: boolean = false;
  result: any = [];
  searchValue: string = "";
  inputResult: number = 10;
  showActive: boolean = false;
  totalPages: number;
  firstRecordOnPage: number;
  lastRecordOnPage: number;
  totalRecords: number;
  currentPage: number;
  historicoResult: Historico[] = [];
  success: boolean;
  loadingApi: boolean = false;

  constructor(
    private recipienteService: RecipientesService,
    private excelService: ExcelService,
    public dialogRef: MatDialogRef<RecipientesHistoricoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.columns = [
      { name: "Data/Hora", sort: true, sortAsc: false, sortDesc: false, field: "DataCriacao" },
      { name: "Usuário", sort: true, sortAsc: false, sortDesc: false, field: "NomeUsuario" },
      { name: "Evento", sort: true, sortAsc: false, sortDesc: false, field: "Evento" },
      { name: "Motivo", sort: true, sortAsc: false, sortDesc: false, field: "Descricao" },
      { name: "Ação", sort: true, sortAsc: false, sortDesc: false, field: "" }
    ]

    this.body = {
      page: 1,
      size: 10,
      ativos: true,
      orderProperty: "DataCriacao",
      orderCrescent: false,
      filterProperty: "ativo",
      filterValue: 'true',
      idAggregate: this.data.values.id
    }

    this.getList();
  }

  closeModal() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onChangeNumber(value: any) {
    this.body.size = this.inputResult;
    this.body.page = 1;
    this.getList();
  }

  getList() {
    this.loadingApi = true;
    this.recipienteService.getHistoric(this.body, this.searchValue)
      .subscribe(
        (data: any) => {
          let result = data;

          this.loading = true;
          this.historicoResult = result.data.results;
          this.totalPages = result.data.totalPages;
          this.currentPage = result.data.currentPage;
          this.totalRecords = result.data.totalRecords;
          this.firstRecordOnPage = result.data.firstRecordOnPage;
          this.lastRecordOnPage = result.data.lastRecordOnPage;

          this.loadingApi = false;
        },
        (error) => {
          console.log(error);
          this.loadingApi = false;
        });
  }

  getListFilter() {
    return this.historicoResult;
    // let tempValues = this.historicoResult.filter((data) => JSON.stringify(data.dataCriacao).toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 || JSON.stringify(data.evento).toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 || JSON.stringify(data.evento).toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 || JSON.stringify(data.descricao).toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
    // return tempValues;
  }

  changePageNumber(number) {
    this.body.page = number;
    this.getList();
  }

  clickTH(field) {
    this.changeSortStyle(field);
    this.body.orderProperty = field;
    this.body.orderCrescent = !this.body.orderCrescent;
    this.getList();
  }

  changeSortStyle(field) {
    this.columns.filter((f) => {
      if (f.field == field) {
        if (f.sortAsc) {
          f.sortAsc = false;
          f.sortDesc = true;
        } else {
          f.sortDesc = false;
          f.sortAsc = true;
        }
      } else {
        f.sortAsc = false;
        f.sortDesc = false;
      }
      return f;
    })
  }

  convertDate(date: any) {
    var dateTime: any = new Date(date);
    dateTime = moment(dateTime).format("DD/MM/YYYY HH:MM");
    return dateTime;
  }

  exportExcel(result){
    const dataExcel = [];
    this.recipienteService.getExcelHistorico(result.id).subscribe((data: any) => {
      dataExcel.push({
        'Propriedade': 'Nome Recipiente',
        'Antes': data.data.Nome.anterior,
        'Depois': data.data.Nome.depois
      });
      this.excelService.exportExcel(dataExcel, 'recipiente');
    });
  }

  filtrar(search)
  {
    this.searchValue = search;
    this.body.page = 1;
    this.getList();
  }

}

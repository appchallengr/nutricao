import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/core/models/Column';
import { Body } from 'src/app/core/models/Body';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CadastroUnidadesActiveComponent } from './cadastro-unidades-active/cadastro-unidades-active.component';
import { environment } from 'src/environments/environment';
import { ExcelService } from 'src/app/core/services/excel.service';

@Component({
  selector: 'app-cadastro-unidades',
  templateUrl: './cadastro-unidades.component.html',
  styleUrls: ['./cadastro-unidades.component.css']
})
export class CadastroUnidadesComponent implements OnInit {

  columns: Column[];
  body: Body;
  loadingApi:boolean;
  loading:boolean;
  success: boolean;
  updated: boolean;
  ativo: boolean;
  inativo: boolean;
  excelSuccess: boolean;
  searchValue: String;
  result: any = [];
  inativarList: boolean;
  showActive: boolean = true;
  showInactive: boolean = false;

  totalPages: number;
  firstRecordOnPage: number;
  lastRecordOnPage: number;
  totalRecords: number;
  currentPage: number;
  inputResult: number = 10;

  constructor(
    private cadastroUnidadesService: CadastroUnidadesService,
    private router: Router,
    private excelService: ExcelService,
    private dialog: MatDialog,
  ) {

    let defaultBody = {
      page: 1,
      size: 10,
      ativos: "",
      orderProperty: "Unidade",
      orderCrescent: true,
      filterProperty: "ativo",
      filterValue: true
    }

    const navigation = this.router.getCurrentNavigation();
    this.success = navigation.extras.state ? navigation.extras.state.success : false;
    this.updated = navigation.extras.state ? navigation.extras.state.updated : false;
    this.inativarList = navigation.extras.state ? navigation.extras.state.inativo : false;
    this.body = navigation.extras.state ? navigation.extras.state.body : defaultBody;
    this.searchValue = navigation.extras.state ? navigation.extras.state.searchValue : "";
    this.showActive = navigation.extras.state ? navigation.extras.state.showActive : true;
    this.showInactive = navigation.extras.state ? navigation.extras.state.showInactive : false;

    
  }

  async ngOnInit() {
    this.columns = [
      { name: "Unidade", sort: true, sortAsc: false, sortDesc: false, field: "Unidade" },
      { name: "Sigla Unidade", sort: true, sortAsc: false, sortDesc: false, field: "Sigla" },
      { name: "Situação", sort: true, sortAsc: false, sortDesc: false, field: "Ativo" }
    ]

    this.changeStatus();

    await this.delay(5000);
    this.success = false;
    this.updated = false;
    this.ativo = false;
    this.inativo = false;
  }

  getEdit(value){
    if(value.ativo){
      this.router.navigateByUrl('/unidade-medida/editar/' + value.id, { state: { body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
    }
  }

  getView(value){
    this.router.navigateByUrl('/unidade-medida/visualizar/' + value.id, { state: { body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
  }

  filtrar(search){
    this.body.page = 1;
    this.searchValue = search;
    if(search.length >= 3 || search.length == 0){
      this.getList();
    }  
  }

  changeStatus(){
    if(this.showActive && this.showInactive){
      this.body.filterProperty = "";
      this.body.filterValue = "";
    }else if(this.showActive){
      this.body.filterProperty = "ativo";
      this.body.filterValue = true;
    }else if(this.showInactive){
      this.body.filterProperty = "ativo";
      this.body.filterValue = false;
    }

    this.getList();
  }

  new(){
    this.router.navigateByUrl('/unidade-medida/novo/', { state: { body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
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

  changePageNumber(number) {
    this.body.page = number;
    this.getList();
  }

  dismiss() {
    this.success = false;
    this.updated = false;
    this.ativo = false;
    this.inativo = false;
    this.excelSuccess = false;
  }

  onChangeNumber(value: any) {
    this.body.size = this.inputResult;
    this.body.page = 1;
    this.getList();
  }

  getListFilter() {
    return this.result;
  }

  getList() {
    this.loadingApi = true;

    this.cadastroUnidadesService.getAll(this.body, this.searchValue).subscribe((data: any) => {
      let result = data;
      this.loading = true;
      this.result = result.data.results;

      this.totalPages = result.data.totalPages;
      this.currentPage = result.data.currentPage;
      this.totalRecords = result.data.totalRecords;
      this.firstRecordOnPage = result.data.firstRecordOnPage;
      this.lastRecordOnPage = result.data.lastRecordOnPage;

      this.loadingApi = false;
    });
  }

  activate(v) {
    this.openDialog(v);
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  openDialog(values) {
    
    const dialogRef = this.dialog.open(CadastroUnidadesActiveComponent, {
      width: environment.modalWidth,
      data: {
        values: values,
        body: this.body
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'success') {
        this.success = true;
        this.getList();
      } else if (result.event === 'ativo') {
        this.ativo = true;
        this.getList();
      } else if (result.event === 'inativo') {
        this.inativo = true;
        this.getList();
      }

      setTimeout(() => {
        this.success = false;
        this.updated = false;
        this.ativo = false;
        this.inativo = false;
        this.excelSuccess = false;
      }, 5000);
    });
  }

  async exportExcel() {
    const dataExcel = [];
    this.cadastroUnidadesService.getExcel(this.searchValue).subscribe((data: any) => {
      console.log("result",data);
      data.data.map((e)=>{
        dataExcel.push({
          'Unidade': e.unidade,
          'Sigla': e.sigla,
          'Situação': e.ativo.toString().toLowerCase() == 'sim' ? 'Ativo': 'Inativo'
        });
      })
      this.excelService.exportExcel(dataExcel, 'cadastro-unidades');
      this.excelSuccess = true;
    });
    await this.delay(5000);
    this.excelSuccess = false;
  }

}

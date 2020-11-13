import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/core/models/Column';
import { Body } from 'src/app/core/models/Body';
import { ExcelService } from 'src/app/core/services/excel.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategoriaDietaService } from 'src/app/core/services/categoria-dieta-service';
import { IrisAuthService } from 'src/app/core/auth/iris.auth.service';
import { CategoriaDietaActiveComponent } from './categoria-dieta-active/categoria-dieta-active.component';
import { CategoriaDietaHistoricoComponent } from './categoria-dieta-historico/categoria-dieta-historico.component';

@Component({
  selector: 'app-categoria-dieta',
  templateUrl: './categoria-dieta.component.html',
  styleUrls: ['./categoria-dieta.component.css']
})
export class CategoriaDietaComponent implements OnInit {

  columns: Column[];
  body: Body;
  loading: boolean = false;
  result: any = [];
  searchValue: string = "";
  showActive: boolean = false;
  success: boolean;
  updated: boolean;
  ativo: boolean;
  inativo: boolean;
  inativarList: boolean;
  inputResult: number = 10;

  totalPages: number;
  firstRecordOnPage: number;
  lastRecordOnPage: number;
  totalRecords: number;
  currentPage: number;

  canISee: boolean = false;
  canISeeHistoric: boolean = false;
  canIInclude: boolean = false;
  canIEdit: boolean = false;
  canIExport: boolean = false;
  canIActive: boolean = false;
  canIInactive: boolean = false;
  canIAccessThisPage: boolean = false;

  loadingApi: boolean = false;
  constructor(
    private categoriaDietaService: CategoriaDietaService,
    private excelService: ExcelService,
    private router: Router,
    private dialog: MatDialog,
    public auth: IrisAuthService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.success = navigation.extras.state ? navigation.extras.state.success : false;
    this.updated = navigation.extras.state ? navigation.extras.state.updated : false;
    this.inativarList = navigation.extras.state ? navigation.extras.state.inativo : false;
  }

  ngOnInit() {
    this.columns = [
      { name: "Descrição da Categoria", sort: true, sortAsc: false, sortDesc: false, field: "Descricao" }
    ]

    this.body = {
      page: 1,
      size: 10,
      ativos: "true",
      orderProperty: "Descricao",
      orderCrescent: true,
      filterProperty: "ativo",
      filterValue: 'true'
    }

    //this.decodeToken();
    this.getFilterValue();
    this.getList();
  }

  getFilterValue() {
    if (this.inativarList) {
      this.showActive = true;
      this.body.filterValue = "false";
    } else {
      this.showActive = false;
      this.body.filterValue = "true";
    }
  }

  decodeToken() {
    const decodeToken = this.auth.decodePayloadJWT();
    let flagAdministrador = decodeToken.flagAdministrador === 'True';
    if (flagAdministrador) {
      this.canIAccessThisPage = true;
      this.canISee = true;
      this.canISeeHistoric = true;
      this.canIInclude = true;
      this.canIEdit = true;
      this.canIExport = true;
      this.canIInactive = true;
      this.canIActive = true;
    } else {
      this.canIAccessThisPage = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Listar');
      this.canISee = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Visualizar');
      this.canISeeHistoric = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Historico');
      this.canIInclude = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Incluir');
      this.canIEdit = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Editar');
      this.canIExport = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Exportar');
      this.canIInactive = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Inativar');
      this.canIActive = decodeToken.irisclaim.includes('CadastrarCategoriasdaDieta_Ativar');
    }

    this.canIAccessThisPage ? null : this.router.navigate(['/']);

  }

  changePageNumber(number) {
    this.body.page = number;
    this.getList();
  }

  onChangeNumber(value: any) {
    this.body.size = this.inputResult;
    this.body.page = 1;
    this.getList();
  }

  clickTH(field) {
    this.changeSortStyle(field);
    this.body.orderProperty = field;
    this.body.orderCrescent = !this.body.orderCrescent;
    this.getList();
  }

  getList() {
    this.loadingApi = true;

    this.categoriaDietaService.getAll(this.body, this.searchValue).subscribe((data: any) => {
      let result = data;
      
      
      this.loading = true;
      result.data.results.map((e)=>{
        e.ativo = this.body.ativos;
      })
      this.result = result.data.results;

      this.totalPages = result.data.totalPages;
      this.currentPage = result.data.currentPage;
      this.totalRecords = result.data.totalRecords;
      this.firstRecordOnPage = result.data.firstRecordOnPage;
      this.lastRecordOnPage = result.data.lastRecordOnPage;

      this.loadingApi = false;
    });
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
  

  getListFilter() {
    return this.result;
    // let tempValues = this.result.filter((data) => JSON.stringify(data.descricao).toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 );
    // return tempValues;
  }

  changeValue(value: any) {

  }

  dismiss() {
    this.success = false;
    this.updated = false;
    this.ativo = false;
    this.inativo = false;
  }

  changeStatus(event) {
    this.body.page = 1;
    if (this.body.filterValue == "true") {
      this.body.filterValue = "false"
    } else {
      this.body.filterValue = "true"
    }
    this.getList();
  }
  

  exportExcel() {
    const dataExcel = [];
    this.categoriaDietaService.getExcel(this.searchValue).subscribe((data: any) => {
      console.log("result",)
      data.data.map((e)=>{
        dataExcel.push({
          'Categoria': e.descricao,
          'Situação': e.ativo.toString().toLowerCase() == 'sim' ? 'Ativo': 'Inativo'
        });
      })
      this.excelService.exportExcel(dataExcel, 'categoria-dieta');
    });
  }

  activate(v) {
    this.openDialog(v);
  }

  historic(v) {
    this.openDialogHistoric(v);
  }


  openDialog(values) {
    
    const dialogRef = this.dialog.open(CategoriaDietaActiveComponent, {
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
    });
  }

  openDialogHistoric(values) {
    
    const dialogRef = this.dialog.open(CategoriaDietaHistoricoComponent, {
      width: environment.modalWidth,
      data: {
        values: values
      }
    });
  }

  filtrar(search){
    this.body.page = 1;
    this.searchValue = search;
    this.getList();
  }
}

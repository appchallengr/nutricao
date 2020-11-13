import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  public exportExcelCuidados(jsonData: any[],jsonData2: any[],jsonData3: any[],jsonData4: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const ws2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData2);
    const ws3: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData3);
    const ws4: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData4);
    const wb: XLSX.WorkBook = { Sheets: { 'cuidados': ws, 'especialidades': ws2,'locaisatendimento': ws3,'procedimentos': ws4 }, SheetNames: ['cuidados','especialidades','locaisatendimento','procedimentos'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: this.fileType});
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }
}